import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearMascotaPage } from './crear-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: CrearMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearMascotaPageRoutingModule {}
