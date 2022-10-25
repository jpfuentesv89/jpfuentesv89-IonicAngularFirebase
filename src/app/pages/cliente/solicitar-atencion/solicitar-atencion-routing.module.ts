import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarAtencionPage } from './solicitar-atencion.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarAtencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarAtencionPageRoutingModule {}
