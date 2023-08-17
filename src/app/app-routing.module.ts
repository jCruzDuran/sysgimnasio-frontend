import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { PlanesComponent } from './components/planes/planes.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { CobrosComponent } from './components/cobros/cobros.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', component: IndexComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'rutina', component: RutinaComponent},
  {path: 'planes', component: PlanesComponent},
  {path: 'ejercicios', component: EjerciciosComponent},
  {path: 'cobros', component: CobrosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
