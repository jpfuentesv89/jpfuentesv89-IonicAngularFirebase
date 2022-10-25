import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosticoPage } from './diagnostico.page';

const routes: Routes = [
  {
    path: '',
    component: DiagnosticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnosticoPageRoutingModule {}
