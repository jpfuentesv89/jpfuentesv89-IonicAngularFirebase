import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarAtencionesPage } from './agendar-atenciones.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarAtencionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarAtencionesPageRoutingModule {}
