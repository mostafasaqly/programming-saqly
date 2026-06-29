import { Injectable, signal, effect } from '@angular/core';

export type Language = 'en' | 'ar';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private _lang = signal<Language>('en');

  readonly lang = this._lang.asReadonly();
  readonly isArabic = () => this._lang() === 'ar';
  readonly isRTL = () => this._lang() === 'ar';

  constructor() {
    const saved = localStorage.getItem('course-lang') as Language | null;
    if (saved === 'ar' || saved === 'en') {
      this._lang.set(saved);
    }
    effect(() => {
      const lang = this._lang();
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.body.classList.toggle('lang-ar', lang === 'ar');
      localStorage.setItem('course-lang', lang);
    });
  }

  toggle(): void {
    this._lang.update(l => l === 'en' ? 'ar' : 'en');
  }

  setLang(lang: Language): void {
    this._lang.set(lang);
  }

  t(ar: string, en: string): string {
    return this._lang() === 'ar' ? ar : en;
  }
}
