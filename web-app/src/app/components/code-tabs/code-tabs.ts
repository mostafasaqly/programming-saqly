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

  getHighlighted(code: string, language: string): string {
    const placeholders: string[] = [];
    const save = (html: string): string => {
      const key = `@@PH_${placeholders.length.toString(36).toUpperCase()}@@`;
      placeholders.push(html);
      return key;
    };

    let result = code;

    // Comments (// … and # …)
    result = result.replace(/(\/\/[^\n]*|#[^\n]*)/g, m =>
      save(`<span class="cmt">${this.esc(m)}</span>`)
    );
    // Template literals
    result = result.replace(/(`[^`]*`)/g, m =>
      save(`<span class="str">${this.esc(m)}</span>`)
    );
    // Double-quoted strings
    result = result.replace(/"([^"\\]|\\.)*"/g, m =>
      save(`<span class="str">${this.esc(m)}</span>`)
    );
    // Single-quoted strings
    result = result.replace(/'([^'\\]|\\.)*'/g, m =>
      save(`<span class="str">${this.esc(m)}</span>`)
    );

    result = this.esc(result);

    // Language-aware keywords
    const jsKw   = /\b(function|return|let|const|var|if|else|for|while|do|break|continue|new|class|import|export|default|true|false|null|undefined|typeof|instanceof|in|of|switch|case|this|async|await|try|catch|finally|throw|void|delete|yield)\b/g;
    const pyKw   = /\b(def|return|if|elif|else|for|while|break|continue|class|import|from|as|with|try|except|finally|raise|pass|True|False|None|not|and|or|in|is|lambda|global|nonlocal|assert|yield|print)\b/g;
    const javaKw = /\b(public|private|protected|static|final|class|interface|extends|implements|new|return|if|else|for|while|do|break|continue|switch|case|default|try|catch|finally|throw|throws|void|int|long|double|float|boolean|char|byte|short|String|System|null|true|false|this|super|import|package|abstract|synchronized|volatile|transient|instanceof|enum)\b/g;
    const cppKw  = /\b(int|long|double|float|bool|char|void|short|unsigned|signed|return|if|else|for|while|do|break|continue|switch|case|default|class|struct|new|delete|namespace|using|include|public|private|protected|virtual|override|const|static|auto|nullptr|true|false|this|try|catch|throw|template|typename|typedef|enum)\b/g;

    const kwMap: Record<string, RegExp> = {
      javascript: jsKw,
      python:     pyKw,
      java:       javaKw,
      cpp:        cppKw,
      c:          cppKw,
    };
    const kw = kwMap[language] ?? jsKw;

    result = result.replace(kw, m => save(`<span class="kw">${m}</span>`));

    // Annotations / preprocessor
    if (language === 'java') {
      result = result.replace(/(@[A-Za-z]+)/g, m => save(`<span class="ann">${m}</span>`));
    }
    if (language === 'cpp' || language === 'c') {
      result = result.replace(/(#\w+)/g, m => save(`<span class="pp">${m}</span>`));
    }

    // Function calls
    result = result.replace(/\b([a-zA-Z_]\w*)(?=\s*\()/g, m =>
      save(`<span class="fn">${m}</span>`)
    );
    // Numbers
    result = result.replace(/(?<![.\w])(\d+\.?\d*)(?![\w])/g, m =>
      save(`<span class="num">${m}</span>`)
    );

    result = result.replace(/@@PH_([A-Z0-9]+)@@/g, (_, key) => {
      const index = parseInt(key, 36);
      return placeholders[index] ?? '';
    });

    return result;
  }

  private esc(s: string): string {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}
