import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdministradorComponentSignup } from './pages/signup/administrador/administrador.component';
import { BodegaComponentSignup } from './pages/signup/bodega/bodega.component';
import { ClienteComponentSignup } from './pages/signup/cliente/cliente.component';
import { PeluqueroComponentSignup } from './pages/signup/peluquero/peluquero.component';
import { RecepcionistaComponentSignup } from './pages/signup/recepcionista/recepcionista.component';
import { VeterinarioComponentSignup } from './pages/signup/veterinario/veterinario.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'registrocliente',
    component: ClienteComponentSignup
  },
  
  {
    path: 'registrobodega',
    component: BodegaComponentSignup
  },
  {
    path: 'registroadministrador',
    component: AdministradorComponentSignup
  },
  {
    path: 'registrorecepcionista',
    component: RecepcionistaComponentSignup
  },
  {
    path: 'registroveterinario',
    component: VeterinarioComponentSignup
  },
  {
    path: 'registropeluquero',
    component: PeluqueroComponentSignup
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
