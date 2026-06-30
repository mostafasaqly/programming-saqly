import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LanguageService } from './services/language.service';
import { CourseService } from './services/course.service';
import { ThemeService } from './services/theme.service';
import { SidebarComponent } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly lang = inject(LanguageService);
  readonly course = inject(CourseService);
  readonly theme = inject(ThemeService);

  sidebarOpen = false;

  toggleLanguage() {
    this.lang.toggle();
  }

  toggleTheme() {
    this.theme.toggle();
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
