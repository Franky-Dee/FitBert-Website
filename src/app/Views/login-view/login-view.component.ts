import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const universityNumber = form.universityNumber.value;
    const password = form.password.value;
    
    this.afAuth.signInWithEmailAndPassword(universityNumber, password)
      .then(() => {
        // Login successful, navigate to the new page
        this.router.navigateByUrl('/landing');
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
      });
  }
}
