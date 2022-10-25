import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearClientePage } from './crear-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: CrearClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearClientePageRoutingModule {}
