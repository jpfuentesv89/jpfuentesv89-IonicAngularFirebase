import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ClienteComponent } from './pages/signup/cliente/cliente.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'registrocliente',
    component: ClienteComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
