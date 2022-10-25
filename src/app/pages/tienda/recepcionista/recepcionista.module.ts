import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepcionistaPageRoutingModule } from './recepcionista-routing.module';

import { RecepcionistaPage } from './recepcionista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecepcionistaPageRoutingModule
  ],
  declarations: [RecepcionistaPage]
})
export class RecepcionistaPageModule {}
