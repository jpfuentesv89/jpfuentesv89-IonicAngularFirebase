import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtencionPage } from './atencion.page';

const routes: Routes = [
  {
    path: '',
    component: AtencionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtencionPageRoutingModule {}
