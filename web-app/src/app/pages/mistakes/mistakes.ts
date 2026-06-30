import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { LanguageService } from '../../services/language.service';
import { QuizQuestion, SectionContent } from '../../data/sections.data';

interface WrongAnswer {
  section: SectionContent;
  question: QuizQuestion;
  questionIndex: number;
  selectedIndex: number;
}

@Component({
  selector: 'app-mistakes',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './mistakes.html',
  styleUrl: './mistakes.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MistakesComponent {
  readonly course = inject(CourseService);
  readonly lang = inject(LanguageService);

  // Collect all wrong answers across all sections
  readonly wrongAnswers = computed<WrongAnswer[]>(() => {
    const results: WrongAnswer[] = [];
    for (const sec of this.course.sections) {
      if (!sec.quiz?.length) continue;
      const answers = this.course.getQuizAnswers(sec.id);
      sec.quiz.forEach((q, qi) => {
        const selected = answers[qi];
        if (selected !== undefined && selected !== q.correctIndex) {
          results.push({ section: sec, question: q, questionIndex: qi, selectedIndex: selected });
        }
      });
    }
    return results;
  });

  // Re-attempt state: track new answers per wrong entry
  private _retryAnswers = signal<Record<string, number>>({});
  private key(w: WrongAnswer) { return `${w.section.id}-${w.questionIndex}`; }

  retrySelected(w: WrongAnswer): number { return this._retryAnswers()[this.key(w)] ?? -1; }
  retryAnswered(w: WrongAnswer): boolean { return this._retryAnswers()[this.key(w)] !== undefined; }
  retryCorrect(w: WrongAnswer): boolean {
    return this._retryAnswers()[this.key(w)] === w.question.correctIndex;
  }

  answer(w: WrongAnswer, oi: number): void {
    if (this.retryAnswered(w)) return;
    this._retryAnswers.update(s => ({ ...s, [this.key(w)]: oi }));
    // If correct, persist fix into CourseService so the badge updates
    if (oi === w.question.correctIndex) {
      this.course.saveQuizAnswer(w.section.id, w.questionIndex, oi);
    }
  }

  resetAll(): void {
    this._retryAnswers.set({});
  }

  correctedCount = computed(() =>
    this.wrongAnswers().filter(w => this.retryCorrect(w)).length
  );
}
