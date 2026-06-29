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
    let escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Keywords
    const keywords = /\b(function|return|let|const|var|if|else|for|while|do|break|continue|new|class|import|export|default|true|false|null|undefined|typeof|instanceof|in|of|switch|case|this|async|await|try|catch|finally|throw|void|delete|yield|print|def|and|or|not|pass|elif|lambda|import|from|as|with|assert|global|nonlocal|raise)\b/g;
    escaped = escaped.replace(keywords, '<span class="kw">$1</span>');

    // Strings
    escaped = escaped.replace(/(&quot;[^&]*?&quot;|&#039;[^&#]*?&#039;|`[^`]*?`|"[^"]*?"|'[^']*?')/g, '<span class="str">$1</span>');

    // Numbers
    escaped = escaped.replace(/\b(\d+\.?\d*)\b/g, '<span class="num">$1</span>');

    // Comments
    escaped = escaped.replace(/(\/\/[^\n]*|#[^\n]*)/g, '<span class="cmt">$1</span>');

    // Functions calls
    escaped = escaped.replace(/(\w+)(?=\()/g, '<span class="fn">$1</span>');

    return escaped;
  }
}
