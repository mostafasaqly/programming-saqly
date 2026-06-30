import { Component, Input, OnChanges, signal, ChangeDetectionStrategy, inject } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeTabsComponent implements OnChanges {
  @Input() tabs: LangTab[] = [];
  @Input() title = '';

  readonly lang = inject(LanguageService);
  activeTab = signal<string>('');
  copied = signal(false);
  jsOutput = signal<string[]>([]);
  jsRunning = signal(false);

  // Editable sandbox
  sandboxCode = signal<Record<string, string>>({});
  sandboxMode = signal<Record<string, boolean>>({});
  sandboxOutput = signal<Record<string, string[]>>({});

  getSandboxCode(tabId: string, originalCode: string): string {
    return this.sandboxCode()[tabId] ?? originalCode;
  }

  isSandboxMode(tabId: string): boolean {
    return !!this.sandboxMode()[tabId];
  }

  toggleSandbox(tabId: string, originalCode: string): void {
    const current = this.sandboxMode()[tabId];
    if (!current) {
      this.sandboxCode.update(s => ({ ...s, [tabId]: s[tabId] ?? originalCode }));
    }
    this.sandboxMode.update(s => ({ ...s, [tabId]: !current }));
    this.sandboxOutput.update(s => ({ ...s, [tabId]: [] }));
  }

  setSandboxCode(tabId: string, code: string): void {
    this.sandboxCode.update(s => ({ ...s, [tabId]: code }));
    this.sandboxOutput.update(s => ({ ...s, [tabId]: [] }));
  }

  resetSandbox(tabId: string, originalCode: string): void {
    this.sandboxCode.update(s => ({ ...s, [tabId]: originalCode }));
    this.sandboxOutput.update(s => ({ ...s, [tabId]: [] }));
  }

  runSandboxJs(tabId: string): void {
    const code = this.sandboxCode()[tabId] ?? '';
    const lines: string[] = [];
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    try {
      const win = iframe.contentWindow as Window & { console: Console };
      win.console.log = (...args: unknown[]) => {
        lines.push(args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
      };
      win.console.error = (...args: unknown[]) => { lines.push('❌ ' + args.map(a => String(a)).join(' ')); };
      (win as unknown as Record<string, unknown>)['alert'] = () => {};
      (win as unknown as Record<string, unknown>)['prompt'] = () => null;
      (win as unknown as Record<string, unknown>)['confirm'] = () => false;
      (iframe.contentWindow as unknown as Record<string, (c: string) => void>)['eval'](code);
      this.sandboxOutput.update(s => ({ ...s, [tabId]: lines.length ? lines : ['(no output)'] }));
    } catch (e) {
      this.sandboxOutput.update(s => ({ ...s, [tabId]: ['❌ ' + (e instanceof Error ? e.message : String(e))] }));
    } finally {
      document.body.removeChild(iframe);
    }
  }

  getSandboxOutput(tabId: string): string[] {
    return this.sandboxOutput()[tabId] ?? [];
  }

  // Python runner (Pyodide)
  pyOutput = signal<string[]>([]);
  pyRunning = signal(false);
  pyReady = signal(false);
  pyLoading = signal(false);
  private pyodide: unknown = null;

  async loadPyodide(): Promise<void> {
    if (this.pyodide || this.pyLoading()) return;
    this.pyLoading.set(true);
    try {
      // Lazy-load Pyodide from CDN only when user clicks Run
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js';
      script.crossOrigin = 'anonymous';
      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Pyodide'));
        document.head.appendChild(script);
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.pyodide = await (window as any)['loadPyodide']();
      this.pyReady.set(true);
    } catch {
      this.pyOutput.set(['❌ Failed to load Python runtime. Check your internet connection.']);
    } finally {
      this.pyLoading.set(false);
    }
  }

  async runPython(code: string): Promise<void> {
    if (this.pyRunning()) return;
    this.pyRunning.set(true);
    this.pyOutput.set([]);
    try {
      if (!this.pyodide) await this.loadPyodide();
      if (!this.pyodide) return;
      const py = this.pyodide as { runPythonAsync: (code: string) => Promise<unknown>; globals: { get: (k: string) => unknown } };
      const lines: string[] = [];
      // Redirect stdout
      await py.runPythonAsync(`
import sys, io
_buf = io.StringIO()
sys.stdout = _buf
`);
      try {
        await py.runPythonAsync(code);
        await py.runPythonAsync(`sys.stdout = sys.__stdout__`);
        const out = py.globals.get('_buf') as { getvalue: () => string };
        const text = typeof out?.getvalue === 'function' ? out.getvalue() : '';
        const outputLines = text.split('\n').filter((l: string) => l !== '' || text.endsWith('\n'));
        this.pyOutput.set(outputLines.length ? outputLines : ['(no output)']);
      } catch (err) {
        await py.runPythonAsync(`sys.stdout = sys.__stdout__`).catch(() => {});
        lines.push('❌ ' + (err instanceof Error ? err.message : String(err)));
        this.pyOutput.set(lines);
      }
    } catch (err) {
      this.pyOutput.set(['❌ ' + (err instanceof Error ? err.message : String(err))]);
    } finally {
      this.pyRunning.set(false);
    }
  }

  clearPyOutput(): void {
    this.pyOutput.set([]);
  }

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

  onTabKeydown(event: KeyboardEvent): void {
    const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const currentIdx = this.tabs.findIndex(t => t.id === this.activeTab());
    let next = currentIdx;
    if (event.key === 'ArrowRight') next = (currentIdx + 1) % this.tabs.length;
    else if (event.key === 'ArrowLeft') next = (currentIdx - 1 + this.tabs.length) % this.tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = this.tabs.length - 1;
    this.selectTab(this.tabs[next].id);
    const bar = (event.currentTarget as HTMLElement);
    const btn = bar.querySelector<HTMLElement>(`[data-tab-index="${next}"]`);
    btn?.focus();
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

  runJs(code: string): void {
    this.jsRunning.set(true);
    const lines: string[] = [];
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    try {
      const win = iframe.contentWindow as Window & { console: Console };
      const origLog = win.console.log.bind(win.console);
      win.console.log = (...args: unknown[]) => {
        lines.push(args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
        origLog(...args);
      };
      win.console.error = (...args: unknown[]) => {
        lines.push('❌ ' + args.map(a => String(a)).join(' '));
      };
      // block alert/prompt/confirm
      (win as unknown as Record<string, unknown>)['alert'] = () => {};
      (win as unknown as Record<string, unknown>)['prompt'] = () => null;
      (win as unknown as Record<string, unknown>)['confirm'] = () => false;
      (iframe.contentWindow as unknown as Record<string, (c: string) => void>)['eval'](code);
      this.jsOutput.set(lines.length ? lines : ['(no output)']);
    } catch (e) {
      this.jsOutput.set(['❌ ' + (e instanceof Error ? e.message : String(e))]);
    } finally {
      document.body.removeChild(iframe);
      this.jsRunning.set(false);
    }
  }

  clearOutput(): void {
    this.jsOutput.set([]);
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
