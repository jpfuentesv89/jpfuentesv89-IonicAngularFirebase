import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerilPage } from './peril.page';

const routes: Routes = [
  {
    path: '',
    component: PerilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerilPageRoutingModule {}
