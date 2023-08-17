import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { RutinaComponent } from './components/rutina/rutina.component';
import { PlanesComponent } from './components/planes/planes.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { CobrosComponent } from './components/cobros/cobros.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { CardComponent } from './components/card/card.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { AddEditPlanesComponent } from './components/add-edit-planes/add-edit-planes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    IndexComponent,
    RutinaComponent,
    PlanesComponent,
    EjerciciosComponent,
    CobrosComponent,
    TopbarComponent,
    CardComponent,
    TablaComponent,
    AddEditPlanesComponent,
    UsuariosComponent,
    DataGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
