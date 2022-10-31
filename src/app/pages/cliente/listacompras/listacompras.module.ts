import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacomprasPageRoutingModule } from './listacompras-routing.module';

import { ListacomprasPage } from './listacompras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacomprasPageRoutingModule
  ],
  declarations: [ListacomprasPage]
})
export class ListacomprasPageModule {}
