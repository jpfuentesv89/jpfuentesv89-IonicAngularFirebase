import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilPage } from './administrador/perfil/perfil.page';
import { PerfilPageBodega } from './bodega/perfil/perfil.page';
import { HomePage } from './home/home.page';
import { NosotrosPage } from './nosotros/nosotros.page';
import { NuestroequipoPage } from './nuestroequipo/nuestroequipo.page';
import { TiendaComponent } from './tienda/tienda.component';

const routes: Routes = [
  {
    path: 'tienda',
    component: TiendaComponent
  },
  {
    path: 'home',
    component: HomePage    
  },
  {
    path: 'nuestroequipo',
    component: NuestroequipoPage
  },
  {
    path: 'nosotros',
    component: NosotrosPage
  },
  {
    path: 'perfiladmin',
    component: PerfilPage
  },
  {
    path: 'perfilbodega',
    component: PerfilPageBodega
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
