import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosPacientePage } from './datos-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: DatosPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosPacientePageRoutingModule {}
