import { Component, Input, OnChanges, signal } from '@angular/core';
import { inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

export interface LangTab {
  id: string;
  label: string;
  icon: string;
  code: string;
  descriptionAr: string;
  descriptionEn: string;
  runUrl: string;
}

const COMPILER_URLS: Record<string, string> = {
  javascript: 'https://www.programiz.com/javascript/online-compiler/',
  python:     'https://www.programiz.com/python-programming/online-compiler/',
  java:       'https://www.programiz.com/java-programming/online-compiler/',
  c:          'https://www.programiz.com/c-programming/online-compiler/',
  cpp:        'https://www.programiz.com/cpp-programming/online-compiler/',
};

const LANG_META: Record<string, { label: string; icon: string }> = {
  javascript: { label: 'JavaScript', icon: '⚡' },
  python:     { label: 'Python',     icon: '🐍' },
  java:       { label: 'Java',       icon: '☕' },
  cpp:        { label: 'C++',        icon: '⚙️' },
  c:          { label: 'C',          icon: '🔵' },
};

@Component({
  selector: 'app-code-tabs',
  imports: [],
  templateUrl: './code-tabs.html',
  styleUrl: './code-tabs.scss',
})
export class CodeTabsComponent implements OnChanges {
  @Input() tabs: LangTab[] = [];
  @Input() title = '';

  readonly lang = inject(LanguageService);
  activeTab = signal<string>('');
  copied = signal(false);

  static buildTab(
    id: string,
    code: string,
    descriptionAr: string,
    descriptionEn: string
  ): LangTab {
    const meta = LANG_META[id] ?? { label: id, icon: '💻' };
    return {
      id,
      label: meta.label,
      icon: meta.icon,
      code,
      descriptionAr,
      descriptionEn,
      runUrl: COMPILER_URLS[id] ?? 'https://www.programiz.com/',
    };
  }

  ngOnChanges(): void {
    if (this.tabs.length && !this.tabs.find(t => t.id === this.activeTab())) {
      this.activeTab.set(this.tabs[0].id);
    }
  }

  selectTab(id: string): void {
    this.activeTab.set(id);
    this.copied.set(false);
  }

  activeTabData(): LangTab | undefined {
    return this.tabs.find(t => t.id === this.activeTab());
  }

  copyCode(): void {
    const tab = this.activeTabData();
    if (!tab) return;
    navigator.clipboard.writeText(tab.code).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }

  openCompiler(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // Keyword sets per language.
  private static readonly KEYWORDS: Record<string, Set<string>> = {
    javascript: new Set('function return let const var if else for while do break continue new class import export default true false null undefined typeof instanceof in of switch case this async await try catch finally throw void delete yield'.split(' ')),
    python: new Set('def return if elif else for while break continue class import from as with try except finally raise pass True False None not and or in is lambda global nonlocal assert yield print'.split(' ')),
    java: new Set('public private protected static final class interface extends implements new return if else for while do break continue switch case default try catch finally throw throws void int long double float boolean char byte short String System null true false this super import package abstract synchronized volatile transient instanceof enum'.split(' ')),
    cpp: new Set('int long double float bool char void short unsigned signed return if else for while do break continue switch case default class struct new delete namespace using include public private protected virtual override const static auto nullptr true false this try catch throw template typename typedef enum'.split(' ')),
  };

  /**
   * Single-pass tokenizer-based highlighter.
   *
   * Each token is classified exactly once by the first matching alternative,
   * then emitted as escaped HTML. Because each character is consumed once and
   * never re-scanned, there are no placeholders and no risk of a later regex
   * corrupting an earlier match (the bug that produced "1(0)").
   */
  getHighlighted(code: string, language: string): string {
    const keywords =
      CodeTabsComponent.KEYWORDS[language] ??
      CodeTabsComponent.KEYWORDS['javascript'];
    const isPython = language === 'python';

    // For Python, '#' begins a comment that runs to end of line.
    // For C/C++, only the directive word (e.g. "#include") is coloured, so the
    // rest of the line ("<iostream>") still tokenizes normally.
    const hashRule = isPython
      ? '(?<lineC>\\/\\/[^\\n]*|#[^\\n]*)'
      : '(?<lineC>\\/\\/[^\\n]*)|(?<preproc>#\\w+)';

    const tokenizer = new RegExp(
      [
        hashRule,                                   // comments / directives
        '(?<blockC>\\/\\*[\\s\\S]*?\\*\\/)',        // /* … */
        '(?<tmpl>`[^`]*`)',                         // `…`
        '(?<dq>"(?:[^"\\\\]|\\\\.)*")',            // "…"
        '(?<sq>\'(?:[^\'\\\\]|\\\\.)*\')',         // '…'
        '(?<num>\\b\\d+\\.?\\d*\\b)',               // 123 / 3.14
        '(?<ident>[A-Za-z_]\\w*)',                  // identifiers / keywords
        '(?<other>[\\s\\S])',                       // any single other char
      ].join('|'),
      'g'
    );

    let out = '';
    for (const m of code.matchAll(tokenizer)) {
      const g = m.groups!;
      if (g['lineC'] !== undefined) {
        out += `<span class="cmt">${this.esc(g['lineC'])}</span>`;
      } else if (g['preproc'] !== undefined) {
        out += `<span class="pp">${this.esc(g['preproc'])}</span>`;
      } else if (g['blockC'] !== undefined) {
        out += `<span class="cmt">${this.esc(g['blockC'])}</span>`;
      } else if (g['tmpl'] !== undefined) {
        out += `<span class="str">${this.esc(g['tmpl'])}</span>`;
      } else if (g['dq'] !== undefined) {
        out += `<span class="str">${this.esc(g['dq'])}</span>`;
      } else if (g['sq'] !== undefined) {
        out += `<span class="str">${this.esc(g['sq'])}</span>`;
      } else if (g['num'] !== undefined) {
        out += `<span class="num">${g['num']}</span>`;
      } else if (g['ident'] !== undefined) {
        const word = g['ident'];
        if (keywords.has(word)) {
          out += `<span class="kw">${word}</span>`;
        } else if (this.isFollowedByCall(code, m.index! + word.length)) {
          out += `<span class="fn">${word}</span>`;
        } else {
          out += word;
        }
      } else {
        out += this.esc(m[0]);
      }
    }
    return out;
  }

  /** True if the next non-space char after `pos` is '(' (a function call). */
  private isFollowedByCall(code: string, pos: number): boolean {
    let i = pos;
    while (i < code.length && (code[i] === ' ' || code[i] === '\t')) i++;
    return code[i] === '(';
  }

  private esc(s: string): string {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}
