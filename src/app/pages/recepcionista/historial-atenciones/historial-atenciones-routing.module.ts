import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialAtencionesPage } from './historial-atenciones.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialAtencionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialAtencionesPageRoutingModule {}
