import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
export class SectionComponent implements OnInit {
  readonly course = inject(CourseService);
  readonly lang = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  section = signal<SectionContent | null>(null);
  multiLangTabs = signal<{ titleAr: string; titleEn: string; tabs: LangTab[] }[]>([]);

  binaryInput = signal('');
  binaryResult = signal('');
  decimalInput = signal('');
  decimalResult = signal('');
  loopCount = signal(0);
  loopRunning = signal(false);
  private loopTimer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      const found = this.course.getSectionById(id);
      if (!found) {
        this.router.navigate(['/']);
        return;
      }
      this.section.set(found);
      this.course.setActive(id);
      this.buildMultiLangTabs(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.resetDemoState();
    });
  }

  private buildMultiLangTabs(id: number): void {
    const examples = MULTI_LANG_EXAMPLES[id] ?? [];
    const built = examples.map(ex => ({
      titleAr: ex.titleAr,
      titleEn: ex.titleEn,
      tabs: ex.tabs.map(t =>
        CodeTabsComponent.buildTab(t.id, t.code, t.descriptionAr, t.descriptionEn)
      ),
    }));
    this.multiLangTabs.set(built);
  }

  resetDemoState() {
    this.binaryInput.set('');
    this.binaryResult.set('');
    this.decimalInput.set('');
    this.decimalResult.set('');
    this.stopLoop();
    this.loopCount.set(0);
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
