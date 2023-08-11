import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
=======
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> b9db15402d41dcdd3a3749c9e1c67bfb51e92599

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    LoginComponent,
    NavbarComponent,
    IndexComponent
>>>>>>> b9db15402d41dcdd3a3749c9e1c67bfb51e92599
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule
=======
    FormsModule,
    HttpClientModule
>>>>>>> b9db15402d41dcdd3a3749c9e1c67bfb51e92599
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
