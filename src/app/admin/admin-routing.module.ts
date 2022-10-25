import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponentMascota } from './mantenedores/mascotas/cliente/cliente.component';
import { DiagnosticoComponentMascota } from './mantenedores/mascotas/diagnostico/diagnostico.component';
import { EspecieComponent } from './mantenedores/mascotas/especie/especie.component';
import { PelajeComponent } from './mantenedores/mascotas/pelaje/pelaje.component';
import { RazasComponent } from './mantenedores/mascotas/razas/razas.component';
import { RecepcionistaComponentMascota } from './mantenedores/mascotas/recepcionista/recepcionista.component';
import { TipoaTencionComponent } from './mantenedores/mascotas/tipoa-tencion/tipoa-tencion.component';
import { PersonaComponent } from './mantenedores/persona/persona.component';
import { HistorialCambiosComponentAdmin } from './mantenedores/productos/administrador/historial-cambios/historial-cambios.component';
import { ListadoProductoComponentAdmin } from './mantenedores/productos/administrador/listado-producto/listado-producto.component';
import { ProductoComponentAdmin } from './mantenedores/productos/administrador/producto/producto.component';
import { HistorialCambiosComponentBodega } from './mantenedores/productos/bodega/historial-cambios/historial-cambios.component';
import { ListadoProductoComponentBodega } from './mantenedores/productos/bodega/listado-producto/listado-producto.component';
import { ProductoComponentBodega } from './mantenedores/productos/bodega/producto/producto.component';
import { TipoPoductosComponent } from './mantenedores/productos/tipo-poductos/tipo-poductos.component';
import { AdministradorComponentAdministrador } from './mantenedores/usuarios/administrador/administrador/administrador.component';
import { BodegaComponentAdministrador } from './mantenedores/usuarios/administrador/bodega/bodega.component';
import { ClienteComponentAdministrador } from './mantenedores/usuarios/administrador/cliente/cliente.component';
import { PeluqueroComponentAdministrador } from './mantenedores/usuarios/administrador/peluquero/peluquero.component';
import { VeterinarioComponentAdministrador } from './mantenedores/usuarios/administrador/veterinario/veterinario.component';
import { ClienteComponentCliente } from './mantenedores/usuarios/cliente/cliente.component';
import { ComunaComponent } from './mantenedores/usuarios/comuna/comuna.component';
import { GeneroComponent } from './mantenedores/usuarios/genero/genero.component';
import { ClienteComponentRecepcionista } from './mantenedores/usuarios/recepcionista/cliente/cliente.component';
import { RecepcionistaComponent } from './mantenedores/usuarios/recepcionista/recepcionista/recepcionista.component';
import { RegionComponent } from './mantenedores/usuarios/region/region.component';
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
  {
    path: 'historialcambiosproductoadmin',
    component: HistorialCambiosComponentAdmin
  },
  {
    path: 'listadoproductosadmin',
    component: ListadoProductoComponentAdmin
  },
  {
    path: 'productoadmin',
    component: ProductoComponentAdmin
  },
  {
    path: 'historialcambiosproductobodega',
    component: HistorialCambiosComponentBodega
  },
  {
    path: 'listadoproductosbodega',
    component: ListadoProductoComponentBodega
  },
  {
    path: 'productosbodega',
    component: ProductoComponentBodega
  },
  {
    path: 'tipoproducto',
    component: TipoPoductosComponent
  },
  {
    path: 'crearadministrador',
    component: AdministradorComponentAdministrador
  },
  {
    path: 'crearbodega',
    component: BodegaComponentAdministrador
  },
  {
    path: 'crearclienteadministrador',
    component: ClienteComponentAdministrador
  },
  {
    path: 'crearpeluquerodministrador',
    component: PeluqueroComponentAdministrador
  },
  {
    path: 'crearveterinarioadministrador',
    component: VeterinarioComponentAdministrador
  },
  {
    path: 'crearclientecliente',
    component: ClienteComponentCliente
  },
  {
    path: 'comuna',
    component: ComunaComponent
  },
  {
    path: 'genero',
    component: GeneroComponent
  },
  {
    path: 'crearclienterecepcionista',
    component: ClienteComponentRecepcionista
  },
  {
    path: 'recepcionista',
    component: RecepcionistaComponent
  },
  {
    path: 'region',
    component: RegionComponent
  },
  {
    path: 'persona',
    component: PersonaComponent
  },

  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
