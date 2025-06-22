import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  name = '';
  prenom='';
  email = '';
  password = '';
  message = '';

  user : User = new User();
  constructor(private router: Router, private auth: AuthService) {}

  redirectToInscription() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
  ngOnInit(): void {}

  createUser() {
  console.log('Submitting user:', this.user);
  this.auth.signup(this.user).subscribe({
    next: response => {
      console.log('Success!', response);
      this.router.navigate(['/login']);
    },
    error: err => {
      console.error('Error:', err);
      this.message = err.error?.error || 'Signup failed';
    }
  });
}

  goToLogin(){
    this.router.navigate(['/login']);
  }

}