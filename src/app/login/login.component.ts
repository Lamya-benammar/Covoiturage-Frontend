import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email = '';
    password = '';
    message = '';
  
    user : User = new User();
  constructor(private router: Router, private auth: AuthService) {}

  onSubmit() {
  const credentials = {
    email: this.user.email || '',
    password: this.user.password || ''
  };
    this.auth.login(credentials).subscribe({
    next: response => {
      console.log('Login successful!', response);
      this.router.navigate(['/dashboard']); 
    },
    error: err => {
      console.error('Login error:', err);
      this.message = err.error?.error || 'Login failed';
    }
  });
  }
}