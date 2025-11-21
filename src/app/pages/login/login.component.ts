import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    console.log('Intento login', this.username, this.password);
    const success = this.auth.login(this.username, this.password);

    if (success) {
      if (this.auth.isAdmin()) this.router.navigate(['/admin']);
      else this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
