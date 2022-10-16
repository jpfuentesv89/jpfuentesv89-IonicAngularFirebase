import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuestroequipoPageRoutingModule } from './nuestroequipo-routing.module';

import { NuestroequipoPage } from './nuestroequipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuestroequipoPageRoutingModule
  ],
  declarations: [NuestroequipoPage]
})
export class NuestroequipoPageModule {}
