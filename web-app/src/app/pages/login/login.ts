import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  readonly auth = inject(AuthService);
  readonly lang = inject(LanguageService);

  code = '';
  error = signal(false);
  shake = signal(false);

  submit() {
    const ok = this.auth.login(this.code);
    if (!ok) {
      this.error.set(true);
      this.shake.set(true);
      setTimeout(() => this.shake.set(false), 500);
    }
  }
}
