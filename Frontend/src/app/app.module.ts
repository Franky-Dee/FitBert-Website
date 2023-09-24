import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './Views/login-view/login-view.component';
import { LandingViewComponent } from './Views/landing-view/landing-view.component';


const firebaseConfig = {
  apiKey: "AIzaSyCY_dimXLCXE-d-GqvfqhO806j3yUc4Hcw",
  authDomain: "fitbert-4de0c.firebaseapp.com",
  projectId: "fitbert-4de0c",
  storageBucket: "fitbert-4de0c.appspot.com",
  messagingSenderId: "446802321972",
  appId: "1:446802321972:web:f26a9ec27aac9f71b7a061",
  measurementId: "G-0PH1HLFV3C"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LandingViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
