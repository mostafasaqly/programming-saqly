import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'ps_auth';
const VALID_CODES = new Set(['ProSaqly001']);

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authed = signal(this.checkStored());

  isAuthed() {
    return this._authed();
  }

  login(code: string): boolean {
    if (VALID_CODES.has(code.trim())) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      this._authed.set(true);
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem(STORAGE_KEY);
    this._authed.set(false);
  }

  private checkStored(): boolean {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  }
}
