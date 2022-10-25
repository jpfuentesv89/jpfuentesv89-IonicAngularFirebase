import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarAtencionesPageRoutingModule } from './agendar-atenciones-routing.module';

import { AgendarAtencionesPage } from './agendar-atenciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarAtencionesPageRoutingModule
  ],
  declarations: [AgendarAtencionesPage]
})
export class AgendarAtencionesPageModule {}
