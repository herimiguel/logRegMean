import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FirstLoginComponent } from './first-login/first-login.component'

const routes: Routes = [
  {
    path: '',
    children: [],
    pathMatch: 'full',
    component : LoginComponent
  },

  {
    path: 'home',
    children: [],
    pathMatch: 'full',
    component: HomeComponent
  },

  {
    path: 'login',
    children: [],
    pathMatch: 'full',
    component: FirstLoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
