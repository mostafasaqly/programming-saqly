import { Component, inject, OnInit, OnDestroy, signal, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { LanguageService } from '../../services/language.service';
import { SectionContent, MULTI_LANG_EXAMPLES } from '../../data/sections.data';
import { CodeBlockComponent } from '../../components/code-block/code-block';
import { CodeTabsComponent, LangTab } from '../../components/code-tabs/code-tabs';

@Component({
  selector: 'app-section',
  imports: [RouterLink, CodeBlockComponent, CodeTabsComponent],
  templateUrl: './section.html',
  styleUrl: './section.scss',
})
export class SectionComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly course = inject(CourseService);
  readonly lang = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);
  private readonly el = inject(ElementRef);
  private revealObserver?: IntersectionObserver;

  section = signal<SectionContent | null>(null);
  multiLangTabs = signal<{ titleAr: string; titleEn: string; tabs: LangTab[] }[]>([]);

  binaryInput = signal('');
  binaryResult = signal('');
  decimalInput = signal('');
  decimalResult = signal('');
  loopCount = signal(0);
  loopRunning = signal(false);
  private loopTimer: ReturnType<typeof setInterval> | null = null;
  private routeSub?: Subscription;

  // Challenge state
  private _hintVisible = signal<Record<number, boolean>>({});
  private _solutionVisible = signal<Record<number, boolean>>({});
  private _solutionLang = signal<Record<number, 'python' | 'js'>>({});

  hintVisible(i: number): boolean { return !!this._hintVisible()[i]; }
  solutionVisible(i: number): boolean { return !!this._solutionVisible()[i]; }
  solutionLang(i: number): 'python' | 'js' { return this._solutionLang()[i] ?? 'python'; }

  toggleHint(i: number): void {
    this._hintVisible.update(s => ({ ...s, [i]: !s[i] }));
  }
  toggleSolution(i: number): void {
    this._solutionVisible.update(s => ({ ...s, [i]: !s[i] }));
  }
  setSolutionLang(i: number, lang: 'python' | 'js'): void {
    this._solutionLang.update(s => ({ ...s, [i]: lang }));
  }

  // Quiz state
  private _quizAnswers = signal<Record<number, number>>({});

  quizAnswered(qi: number): boolean { return this._quizAnswers()[qi] !== undefined; }
  quizSelected(qi: number): number { return this._quizAnswers()[qi] ?? -1; }
  answerQuiz(qi: number, selected: number, _correct: number): void {
    this._quizAnswers.update(s => ({ ...s, [qi]: selected }));
  }
  allQuizAnswered(): boolean {
    const sec = this.section();
    if (!sec?.quiz?.length) return false;
    return sec.quiz.every((_, i) => this.quizAnswered(i));
  }
  quizScore(): number {
    const sec = this.section();
    if (!sec?.quiz) return 0;
    return sec.quiz.filter((q, i) => this._quizAnswers()[i] === q.correctIndex).length;
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      const id = Number(params['id']);
      const found = this.course.getSectionById(id);
      if (!found) {
        this.router.navigate(['/']);
        return;
      }
      this.section.set(found);
      this.course.setActive(id);
      this.buildMultiLangTabs(id);
      this.updateTitle(found);
      document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'instant' });
      this.resetDemoState();
      // Re-run reveal after route change (DOM re-renders)
      setTimeout(() => this.initReveal(), 120);
    });
  }

  ngAfterViewInit() {
    this.initReveal();
  }

  private initReveal() {
    this.revealObserver?.disconnect();
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('revealed');
            this.revealObserver?.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    const targets = (this.el.nativeElement as HTMLElement)
      .querySelectorAll<HTMLElement>('.reveal');
    targets.forEach(t => this.revealObserver!.observe(t));
  }

  ngOnDestroy() {
    this.stopLoop();
    this.routeSub?.unsubscribe();
    this.revealObserver?.disconnect();
  }

  private updateTitle(sec: SectionContent): void {
    const name = this.lang.isArabic() ? sec.titleAr : sec.titleEn;
    const suffix = this.lang.isArabic() ? 'مقدمة في البرمجة' : 'Intro to Programming';
    this.titleService.setTitle(`${this.padId(sec.id)} · ${name} — ${suffix}`);
  }

  // Python first — least syntax noise for absolute beginners.
  private static readonly LANG_ORDER = ['python', 'javascript', 'java', 'cpp', 'c'];

  private buildMultiLangTabs(id: number): void {
    const examples = MULTI_LANG_EXAMPLES[id] ?? [];
    const order = SectionComponent.LANG_ORDER;
    const built = examples.map(ex => {
      const sorted = [...ex.tabs].sort((a, b) => {
        const ia = order.indexOf(a.id);
        const ib = order.indexOf(b.id);
        return (ia === -1 ? order.length : ia) - (ib === -1 ? order.length : ib);
      });
      return {
        titleAr: ex.titleAr,
        titleEn: ex.titleEn,
        tabs: sorted.map(t =>
          CodeTabsComponent.buildTab(t.id, t.code, t.descriptionAr, t.descriptionEn)
        ),
      };
    });
    this.multiLangTabs.set(built);
  }

  resetDemoState() {
    this.binaryInput.set('');
    this.binaryResult.set('');
    this.decimalInput.set('');
    this.decimalResult.set('');
    this.stopLoop();
    this.loopCount.set(0);
    this._hintVisible.set({});
    this._solutionVisible.set({});
    this._solutionLang.set({});
    this._quizAnswers.set({});
  }

  get prevSection(): SectionContent | undefined {
    const s = this.section();
    if (!s) return undefined;
    return this.course.getSectionById(s.id - 1);
  }

  get nextSection(): SectionContent | undefined {
    const s = this.section();
    if (!s) return undefined;
    return this.course.getSectionById(s.id + 1);
  }

  toggleComplete() {
    const s = this.section();
    if (s) this.course.toggleComplete(s.id);
  }

  isCompleted(): boolean {
    const s = this.section();
    return s ? this.course.isCompleted(s.id) : false;
  }

  padId(id: number): string {
    return String(id).padStart(2, '0');
  }

  // Binary converter (Section 20)
  onBinaryInput(value: string) {
    this.binaryInput.set(value);
    if (/^[01]+$/.test(value) && value.length > 0) {
      this.binaryResult.set(`= ${parseInt(value, 2)} (decimal)`);
    } else {
      this.binaryResult.set('');
    }
  }

  onDecimalInput(value: string) {
    this.decimalInput.set(value);
    const n = parseInt(value, 10);
    if (!isNaN(n) && n >= 0) {
      this.decimalResult.set(`= ${n.toString(2)} (binary)`);
    } else {
      this.decimalResult.set('');
    }
  }

  // Loop demo (Section 14)
  startLoop() {
    if (this.loopRunning()) return;
    this.loopCount.set(0);
    this.loopRunning.set(true);
    let i = 0;
    this.loopTimer = setInterval(() => {
      i++;
      this.loopCount.set(i);
      if (i >= 5) {
        this.stopLoop();
      }
    }, 700);
  }

  stopLoop() {
    if (this.loopTimer) {
      clearInterval(this.loopTimer);
      this.loopTimer = null;
    }
    this.loopRunning.set(false);
  }

  getLevelLabel(): string {
    const s = this.section();
    if (!s) return '';
    if (s.level === 'beginner') return this.lang.isArabic() ? 'مبتدئ' : 'Beginner';
    return this.lang.isArabic() ? 'متوسط' : 'Intermediate';
  }
}
