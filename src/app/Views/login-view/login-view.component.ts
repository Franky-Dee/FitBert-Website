import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  email!: string;
  password!: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        // Login successful, navigate to the new page
        this.router.navigateByUrl('/landing');
      })
      .catch((error) => {
        // Handle login error
        console.error(error.message);
      });
  }
}
