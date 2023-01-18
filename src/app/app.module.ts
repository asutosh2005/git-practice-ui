import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { KeeComponent } from './kee/kee.component';
=======
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
>>>>>>> f7a3bfc59c09ea06c76c86a8e06ff52eb7dee4b7

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    KeeComponent
=======
    LoginPageComponent
    // LoginComponent

    // PageNotFoundComponent,

    // LoginComponent

>>>>>>> f7a3bfc59c09ea06c76c86a8e06ff52eb7dee4b7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
