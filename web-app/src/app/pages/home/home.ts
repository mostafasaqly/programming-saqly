import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly course = inject(CourseService);
  readonly lang = inject(LanguageService);

  readonly parts = this.course.parts;
  readonly searchQuery = signal('');

  readonly lastSection = computed(() => {
    const id = this.course.lastVisitedId();
    return id ? this.course.getSectionById(id) : null;
  });

  // Normalize Arabic text: remove tashkeel + unify hamza forms for fuzzy search
  private normalizeAr(text: string): string {
    return text
      .replace(/[ؐ-ًؚ-ٟ]/g, '') // strip tashkeel
      .replace(/[أإآٱ]/g, 'ا')                       // unify alef
      .replace(/ة/g, 'ه')                             // ta marbuta → ha
      .replace(/ى/g, 'ي')                             // alef maqsura → ya
      .toLowerCase();
  }

  readonly searchResults = computed(() => {
    const raw = this.searchQuery().trim();
    if (!raw) return [];
    const qNorm = this.normalizeAr(raw);
    const qLow = raw.toLowerCase();
    return this.course.sections.filter(s =>
      this.normalizeAr(s.titleAr).includes(qNorm) ||
      s.titleEn.toLowerCase().includes(qLow) ||
      this.normalizeAr(s.descriptionAr).includes(qNorm) ||
      s.descriptionEn.toLowerCase().includes(qLow) ||
      s.conceptsAr.some(c => this.normalizeAr(c).includes(qNorm)) ||
      s.conceptsEn.some(c => c.toLowerCase().includes(qLow)) ||
      s.keyPointsAr.some(k => this.normalizeAr(k).includes(qNorm)) ||
      s.keyPointsEn.some(k => k.toLowerCase().includes(qLow))
    );
  });

  onSearch(value: string): void {
    this.searchQuery.set(value);
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }

  getSectionsByPart(part: number) {
    return this.course.getSectionsByPart(part);
  }

  getPartCompletedCount(part: number): number {
    return this.getSectionsByPart(part).filter(s => this.course.isCompleted(s.id)).length;
  }

  isPartCompleted(part: number): boolean {
    const secs = this.getSectionsByPart(part);
    return secs.length > 0 && secs.every(s => this.course.isCompleted(s.id));
  }
}
