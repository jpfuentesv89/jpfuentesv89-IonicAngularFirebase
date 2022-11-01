import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClienteComponentSignup } from './pages/signup/cliente/cliente.component';
import { BodegaComponentSignup } from './pages/signup/bodega/bodega.component';
import { AdministradorComponentSignup } from './pages/signup/administrador/administrador.component';
import { RecepcionistaComponentSignup } from './pages/signup/recepcionista/recepcionista.component';
import { VeterinarioComponentSignup } from './pages/signup/veterinario/veterinario.component';
import { PeluqueroComponentSignup } from './pages/signup/peluquero/peluquero.component';


@NgModule({
  declarations: [
    LoginComponent,
    ClienteComponentSignup,
    BodegaComponentSignup,
    AdministradorComponentSignup,
    RecepcionistaComponentSignup,
    VeterinarioComponentSignup,
    PeluqueroComponentSignup,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    CommonModule,
    IonicModule,
  ]
})
export class AuthModule { }
