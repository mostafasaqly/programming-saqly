import { Component, inject } from '@angular/core';
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

  getSectionsByPart(part: number) {
    return this.course.getSectionsByPart(part);
  }
}
