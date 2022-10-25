import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponentMascota } from './mantenedores/mascotas/cliente/cliente.component';
import { DiagnosticoComponentMascota } from './mantenedores/mascotas/diagnostico/diagnostico.component';
import { EspecieComponent } from './mantenedores/mascotas/especie/especie.component';
import { PelajeComponent } from './mantenedores/mascotas/pelaje/pelaje.component';
import { RazasComponent } from './mantenedores/mascotas/razas/razas.component';
import { RecepcionistaComponentMascota } from './mantenedores/mascotas/recepcionista/recepcionista.component';
import { TipoaTencionComponent } from './mantenedores/mascotas/tipoa-tencion/tipoa-tencion.component';
import { ConfigComponent } from './pages/config/config.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {
    path: 'config',
    component: ConfigComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  },
  {
    path: 'mascotacliente',
    component: ClienteComponentMascota
  },
  {
    path: 'mascotadiagnostico',
    component: DiagnosticoComponentMascota
  },
  {
    path: 'especie',
    component: EspecieComponent
  },
  {
    path: 'pelaje',
    component: PelajeComponent
  },
  {
    path: 'razas',
    component: RazasComponent
  },
  {
    path: 'mascotarecepcionista',
    component: RecepcionistaComponentMascota
  },
  {
    path: 'tipoatencion',
    component: TipoaTencionComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
