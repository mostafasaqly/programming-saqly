import { Component, inject, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { LanguageService } from '../../services/language.service';
import { PARTS } from '../../data/sections.data';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  readonly course = inject(CourseService);
  readonly lang = inject(LanguageService);

  readonly parts = PARTS;

  getSectionsByPart(part: number) {
    return this.course.getSectionsByPart(part);
  }

  padId(id: number): string {
    return String(id).padStart(2, '0');
  }

  scrollTop(): void {
    document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'instant' });
  }
}
