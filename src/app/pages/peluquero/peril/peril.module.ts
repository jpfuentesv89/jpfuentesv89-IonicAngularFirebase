import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerilPageRoutingModule } from './peril-routing.module';

import { PerilPage } from './peril.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerilPageRoutingModule
  ],
  declarations: [PerilPage]
})
export class PerilPageModule {}
