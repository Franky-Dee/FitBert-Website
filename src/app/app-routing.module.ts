import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginViewComponent } from './Views/login-view/login-view.component';
import { LandingViewComponent } from './Views/landing-view/landing-view.component';

const routes: Routes = [
  { path: '', component: LoginViewComponent },
  { path: 'landing', component: LandingViewComponent }, // Add the route for the new page
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
