import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClienteComponent } from './pages/signup/cliente/cliente.component';


@NgModule({
  declarations: [
    LoginComponent,
    ClienteComponent,
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
