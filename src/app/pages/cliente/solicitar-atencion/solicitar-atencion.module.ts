import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarAtencionPageRoutingModule } from './solicitar-atencion-routing.module';

import { SolicitarAtencionPage } from './solicitar-atencion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarAtencionPageRoutingModule
  ],
  declarations: [SolicitarAtencionPage]
})
export class SolicitarAtencionPageModule {}
