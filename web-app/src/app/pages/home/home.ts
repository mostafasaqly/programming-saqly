import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  readonly course = inject(CourseService);
  readonly lang = inject(LanguageService);

  readonly parts = this.course.parts;
  readonly searchQuery = signal('');

  readonly searchResults = computed(() => {
    const q = this.searchQuery().trim().toLowerCase();
    if (!q) return [];
    return this.course.sections.filter(s =>
      s.titleAr.includes(q) ||
      s.titleEn.toLowerCase().includes(q) ||
      s.descriptionAr.includes(q) ||
      s.descriptionEn.toLowerCase().includes(q) ||
      s.conceptsAr.some(c => c.includes(q)) ||
      s.conceptsEn.some(c => c.toLowerCase().includes(q)) ||
      s.keyPointsAr.some(k => k.includes(q)) ||
      s.keyPointsEn.some(k => k.toLowerCase().includes(q))
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
}
