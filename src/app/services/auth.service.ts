import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user: { username: string; role: 'user' | 'admin' } | null = null;

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin123') {
      this.user = { username, role: 'admin' };
      return true;
    } else if (username === 'user' && password === 'user123') {
      this.user = { username, role: 'user' };
      return true;
    }
    return false;
  }

  logout() { this.user = null; }

  isLoggedIn(): boolean { return this.user !== null; }

  isAdmin(): boolean { return this.user?.role === 'admin'; }

  getUsername(): string | null { return this.user?.username || null; }
}
