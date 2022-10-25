import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinarioPageRoutingModule } from './veterinario-routing.module';

import { VeterinarioPage } from './veterinario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinarioPageRoutingModule
  ],
  declarations: [VeterinarioPage]
})
export class VeterinarioPageModule {}
