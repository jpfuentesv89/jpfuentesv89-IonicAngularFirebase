import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialAtencionesPageRoutingModule } from './historial-atenciones-routing.module';

import { HistorialAtencionesPage } from './historial-atenciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialAtencionesPageRoutingModule
  ],
  declarations: [HistorialAtencionesPage]
})
export class HistorialAtencionesPageModule {}
