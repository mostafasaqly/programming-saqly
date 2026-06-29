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
  const placeholders: string[] = [];

  const save = (html: string): string => {
    const key = `@@PH_${placeholders.length.toString(36).toUpperCase()}@@`;
    placeholders.push(html);
    return key;
  };

  let result = code;

  // Comments
  result = result.replace(/(\/\/[^\n]*|#[^\n]*)/g, (m) => {
    return save(`<span class="cmt">${this.esc(m)}</span>`);
  });

  // Template literals
  result = result.replace(/(`[^`]*`)/g, (m) => {
    return save(`<span class="str">${this.esc(m)}</span>`);
  });

  // Double quoted strings
  result = result.replace(/"([^"\\]|\\.)*"/g, (m) => {
    return save(`<span class="str">${this.esc(m)}</span>`);
  });

  // Single quoted strings
  result = result.replace(/'([^'\\]|\\.)*'/g, (m) => {
    return save(`<span class="str">${this.esc(m)}</span>`);
  });

  // Escape remaining code
  result = this.esc(result);

  // Keywords
  const kw =
    /\b(function|return|let|const|var|if|else|for|while|do|break|continue|new|class|import|export|default|true|false|null|undefined|typeof|instanceof|in|of|switch|case|this|async|await|try|catch|finally|throw|void|delete|yield|print|def|and|or|not|pass|elif|lambda|from|as|with|assert|global|nonlocal|raise|int|str|bool|float|double|public|private|static|include|printf|scanf)\b/g;

  result = result.replace(kw, (m) => {
    return save(`<span class="kw">${m}</span>`);
  });

  // Function calls
  result = result.replace(/\b([a-zA-Z_]\w*)(?=\s*\()/g, (m) => {
    return save(`<span class="fn">${m}</span>`);
  });

  // Numbers
  result = result.replace(/(?<![.\w])(\d+\.?\d*)(?![\w])/g, (m) => {
    return save(`<span class="num">${m}</span>`);
  });

  // Restore all placeholders
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
