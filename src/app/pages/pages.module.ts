import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TiendaComponent } from './tienda/tienda.component';
import { NuestroequipoPage } from './nuestroequipo/nuestroequipo.page';
import { HomePage } from './home/home.page';
import { NosotrosPage } from './nosotros/nosotros.page';


@NgModule({
  declarations: [
    TiendaComponent,
    HomePage,
    NuestroequipoPage,
    NosotrosPage,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
