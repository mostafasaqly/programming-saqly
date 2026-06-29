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
    // Use a lookup map keyed by a unique token that cannot appear in escaped HTML.
    // Token format: \x00IDX\x00 — null bytes never appear in source code strings.
    const slots = new Map<string, string>();
    let slotIdx = 0;

    const save = (html: string): string => {
      const token = `\x00${slotIdx++}\x00`;
      slots.set(token, html);
      return token;
    };

    const restore = (s: string): string =>
      s.replace(/\x00(\d+)\x00/g, (_, i) => slots.get(`\x00${i}\x00`) ?? '');

    let result = code;

    // 1. Comments — must come first so strings inside comments aren't re-highlighted
    if (language === 'python') {
      result = result.replace(/(#[^\n]*)/g, m =>
        save(`<span class="cmt">${this.esc(m)}</span>`)
      );
    } else {
      result = result.replace(/(\/\/[^\n]*)/g, m =>
        save(`<span class="cmt">${this.esc(m)}</span>`)
      );
      result = result.replace(/(\/\*[\s\S]*?\*\/)/g, m =>
        save(`<span class="cmt">${this.esc(m)}</span>`)
      );
    }

    // 2. Template literals (JS only)
    if (language === 'javascript') {
      result = result.replace(/(`[^`]*`)/g, m =>
        save(`<span class="str">${this.esc(m)}</span>`)
      );
    }

    // 3. Strings (double and single quoted)
    result = result.replace(/"([^"\\]|\\.)*"/g, m =>
      save(`<span class="str">${this.esc(m)}</span>`)
    );
    result = result.replace(/'([^'\\]|\\.)*'/g, m =>
      save(`<span class="str">${this.esc(m)}</span>`)
    );

    // 4. Escape remaining plain text
    result = this.esc(result);

    // 5. Language-aware keywords
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
    result = result.replace(kwMap[language] ?? jsKw, m =>
      save(`<span class="kw">${m}</span>`)
    );

    // 6. C++ preprocessor (#include etc.) — after esc so # is still a plain #
    if (language === 'cpp' || language === 'c') {
      result = result.replace(/(#\w+)/g, m => save(`<span class="pp">${m}</span>`));
    }

    // 7. Function calls
    result = result.replace(/\b([a-zA-Z_]\w*)(?=\s*\()/g, m =>
      save(`<span class="fn">${m}</span>`)
    );

    // 8. Numbers
    result = result.replace(/(?<![.\w])(\d+\.?\d*)(?![\w])/g, m =>
      save(`<span class="num">${m}</span>`)
    );

    // 9. Restore all saved spans
    return restore(result);
  }

  private esc(s: string): string {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}
