import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _theme = signal<Theme>('dark');

  readonly theme = this._theme.asReadonly();
  readonly isDark = () => this._theme() === 'dark';

  constructor() {
    const saved = localStorage.getItem('course-theme') as Theme | null;
    if (saved === 'dark' || saved === 'light') {
      this._theme.set(saved);
    } else if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
      // Respect the OS preference on first visit.
      this._theme.set('light');
    }

    effect(() => {
      const theme = this._theme();
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('course-theme', theme);
    });
  }

  toggle(): void {
    this._theme.update(t => (t === 'dark' ? 'light' : 'dark'));
  }

  setTheme(theme: Theme): void {
    this._theme.set(theme);
  }
}
