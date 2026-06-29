import { Component, Input, signal } from '@angular/core';
import { CodeExample } from '../../data/sections.data';
import { LanguageService } from '../../services/language.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-code-block',
  imports: [],
  templateUrl: './code-block.html',
  styleUrl: './code-block.scss',
})
export class CodeBlockComponent {
  @Input() example!: CodeExample;

  readonly lang = inject(LanguageService);
  copied = signal(false);

  copyCode(): void {
    navigator.clipboard.writeText(this.example.code).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }

  getHighlighted(code: string, language: string): string {
    // Step 1: extract literals into placeholders BEFORE any HTML escaping
    const placeholders: string[] = [];

    // Extract comments first (// ... and # ...)
    let result = code.replace(/(\/\/[^\n]*|#[^\n]*)/g, (m) => {
      const idx = placeholders.length;
      placeholders.push(`<span class="cmt">${this.esc(m)}</span>`);
      return `\x00${idx}\x00`;
    });

    // Extract template literals `...`
    result = result.replace(/(`[^`]*`)/g, (m) => {
      const idx = placeholders.length;
      placeholders.push(`<span class="str">${this.esc(m)}</span>`);
      return `\x00${idx}\x00`;
    });

    // Extract double-quoted strings
    result = result.replace(/"([^"\\]|\\.)*"/g, (m) => {
      const idx = placeholders.length;
      placeholders.push(`<span class="str">${this.esc(m)}</span>`);
      return `\x00${idx}\x00`;
    });

    // Extract single-quoted strings
    result = result.replace(/'([^'\\]|\\.)*'/g, (m) => {
      const idx = placeholders.length;
      placeholders.push(`<span class="str">${this.esc(m)}</span>`);
      return `\x00${idx}\x00`;
    });

    // Step 2: escape remaining HTML chars
    result = this.esc(result);

    // Step 3: keywords (safe now — no quotes in remaining text)
    const kw = /\b(function|return|let|const|var|if|else|for|while|do|break|continue|new|class|import|export|default|true|false|null|undefined|typeof|instanceof|in|of|switch|case|this|async|await|try|catch|finally|throw|void|delete|yield|print|def|and|or|not|pass|elif|lambda|from|as|with|assert|global|nonlocal|raise|int|str|bool|float|double|public|private|static|void|include|printf|scanf)\b/g;
    result = result.replace(kw, '<span class="kw">$1</span>');

    // Step 4: numbers (not inside words)
    result = result.replace(/(?<![.\w])(\d+\.?\d*)(?![\w])/g, '<span class="num">$1</span>');

    // Step 5: function calls — word followed by (
    result = result.replace(/\b([a-zA-Z_]\w*)(?=\s*\()/g, '<span class="fn">$1</span>');

    // Step 6: restore placeholders
    result = result.replace(/\x00(\d+)\x00/g, (_, i) => placeholders[+i]);

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
