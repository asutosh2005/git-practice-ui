import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
=======
import { LoginComponent } from './login/login.component';
>>>>>>> c52884cc07851b5c24e5e75149f5019bfda05c24

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PageNotFoundComponent
=======
    LoginComponent
>>>>>>> c52884cc07851b5c24e5e75149f5019bfda05c24
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
