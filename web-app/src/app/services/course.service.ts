import { Injectable, signal, computed } from '@angular/core';
import { COURSE_SECTIONS, PARTS, SectionContent } from '../data/sections.data';

const QUIZ_STORAGE_KEY = 'course-quiz-answers';
const CHALLENGES_STORAGE_KEY = 'course-challenges-done';
const LAST_VISITED_KEY = 'course-last-visited';

@Injectable({ providedIn: 'root' })
export class CourseService {
  readonly sections = COURSE_SECTIONS;
  readonly parts = PARTS;

  private _completedIds = signal<Set<number>>(this.loadCompleted());
  private _activeId = signal<number | null>(null);
  private _lastVisitedId = signal<number | null>(this.loadLastVisited());
  private _quizResults = signal<Record<number, Record<number, number>>>(this.loadQuizResults());
  // key: `${sectionId}-${challengeIndex}` → true when solved
  private _challengesDone = signal<Record<string, boolean>>(this.loadChallengesDone());

  readonly completedIds = this._completedIds.asReadonly();
  readonly activeId = this._activeId.asReadonly();
  readonly lastVisitedId = this._lastVisitedId.asReadonly();
  readonly quizResults = this._quizResults.asReadonly();

  readonly completedCount = computed(() => this._completedIds().size);
  readonly progressPercent = computed(() =>
    Math.round((this._completedIds().size / this.sections.length) * 100)
  );

  getQuizAnswers(sectionId: number): Record<number, number> {
    return this._quizResults()[sectionId] ?? {};
  }

  saveQuizAnswer(sectionId: number, questionIndex: number, selectedIndex: number): void {
    this._quizResults.update(all => {
      const next = { ...all, [sectionId]: { ...(all[sectionId] ?? {}), [questionIndex]: selectedIndex } };
      try { localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }

  private loadQuizResults(): Record<number, Record<number, number>> {
    try {
      const raw = localStorage.getItem(QUIZ_STORAGE_KEY);
      if (raw) return JSON.parse(raw) as Record<number, Record<number, number>>;
    } catch {}
    return {};
  }

  isChallengeCompleted(sectionId: number, challengeIndex: number): boolean {
    return !!this._challengesDone()[`${sectionId}-${challengeIndex}`];
  }

  markChallengeCompleted(sectionId: number, challengeIndex: number): void {
    this._challengesDone.update(all => {
      const next = { ...all, [`${sectionId}-${challengeIndex}`]: true };
      try { localStorage.setItem(CHALLENGES_STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }

  getChallengesCompletedCount(sectionId: number): number {
    const sec = this.getSectionById(sectionId);
    if (!sec?.challenges) return 0;
    return sec.challenges.filter((_, i) => this.isChallengeCompleted(sectionId, i)).length;
  }

  private loadChallengesDone(): Record<string, boolean> {
    try {
      const raw = localStorage.getItem(CHALLENGES_STORAGE_KEY);
      if (raw) return JSON.parse(raw) as Record<string, boolean>;
    } catch {}
    return {};
  }

  getSectionById(id: number): SectionContent | undefined {
    return this.sections.find(s => s.id === id);
  }

  getSectionsByPart(part: number): SectionContent[] {
    return this.sections.filter(s => s.part === part);
  }

  setActive(id: number | null): void {
    this._activeId.set(id);
    if (id !== null) {
      this._lastVisitedId.set(id);
      try { localStorage.setItem(LAST_VISITED_KEY, String(id)); } catch {}
    }
  }

  private loadLastVisited(): number | null {
    try {
      const raw = localStorage.getItem(LAST_VISITED_KEY);
      if (raw) { const n = Number(raw); return isNaN(n) ? null : n; }
    } catch {}
    return null;
  }

  toggleComplete(id: number): void {
    this._completedIds.update(set => {
      const next = new Set(set);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      localStorage.setItem('course-completed', JSON.stringify([...next]));
      return next;
    });
  }

  isCompleted(id: number): boolean {
    return this._completedIds().has(id);
  }

  private loadCompleted(): Set<number> {
    try {
      const raw = localStorage.getItem('course-completed');
      if (raw) {
        const arr = JSON.parse(raw) as number[];
        return new Set(arr);
      }
    } catch {}
    return new Set();
  }
}
