import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { RutinaComponent } from './components/rutina/rutina.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', component: IndexComponent},
  {path: 'rutina', component: RutinaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
