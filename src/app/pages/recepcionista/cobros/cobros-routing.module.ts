import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CobrosPage } from './cobros.page';

const routes: Routes = [
  {
    path: '',
    component: CobrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CobrosPageRoutingModule {}
