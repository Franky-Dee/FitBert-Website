import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  constructor(private router: Router) {}

  login(event: Event) {
    event.preventDefault();
    // Add your login logic here, then navigate to the new page
    this.router.navigateByUrl('/landing');
  }
}
