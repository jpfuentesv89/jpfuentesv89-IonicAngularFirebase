import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuestroequipoPage } from './nuestroequipo.page';

const routes: Routes = [
  {
    path: '',
    component: NuestroequipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuestroequipoPageRoutingModule {}
