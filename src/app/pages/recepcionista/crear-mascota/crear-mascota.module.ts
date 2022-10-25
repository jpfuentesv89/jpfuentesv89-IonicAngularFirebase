import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearMascotaPageRoutingModule } from './crear-mascota-routing.module';

import { CrearMascotaPage } from './crear-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearMascotaPageRoutingModule
  ],
  declarations: [CrearMascotaPage]
})
export class CrearMascotaPageModule {}
