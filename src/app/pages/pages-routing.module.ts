import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  },  {
    path: 'perfil',
    loadChildren: () => import('./cliente/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'mascotas',
    loadChildren: () => import('./cliente/mascotas/mascotas/mascotas.module').then( m => m.MascotasPageModule)
  },
  {
    path: 'diagnostico',
    loadChildren: () => import('./cliente/mascotas/diagnostico/diagnostico.module').then( m => m.DiagnosticoPageModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./cliente/compras/compras.module').then( m => m.ComprasPageModule)
  },
  {
    path: 'solicitar-atencion',
    loadChildren: () => import('./cliente/solicitar-atencion/solicitar-atencion.module').then( m => m.SolicitarAtencionPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./tienda/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'recepcionista',
    loadChildren: () => import('./tienda/recepcionista/recepcionista.module').then( m => m.RecepcionistaPageModule)
  },
  {
    path: 'veterinario',
    loadChildren: () => import('./tienda/veterinario/veterinario.module').then( m => m.VeterinarioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./recepcionista/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'crear-cliente',
    loadChildren: () => import('./recepcionista/crear-cliente/crear-cliente.module').then( m => m.CrearClientePageModule)
  },
  {
    path: 'crear-mascota',
    loadChildren: () => import('./recepcionista/crear-mascota/crear-mascota.module').then( m => m.CrearMascotaPageModule)
  },
  {
    path: 'agendar-atenciones',
    loadChildren: () => import('./recepcionista/agendar-atenciones/agendar-atenciones.module').then( m => m.AgendarAtencionesPageModule)
  },
  {
    path: 'historial-atenciones',
    loadChildren: () => import('./recepcionista/historial-atenciones/historial-atenciones.module').then( m => m.HistorialAtencionesPageModule)
  },
  {
    path: 'cobros',
    loadChildren: () => import('./recepcionista/cobros/cobros.module').then( m => m.CobrosPageModule)
  },
  {
    path: 'peril',
    loadChildren: () => import('./veterinario/peril/peril.module').then( m => m.PerilPageModule)
  },
  {
    path: 'historial-atenciones',
    loadChildren: () => import('./veterinario/historial-atenciones/historial-atenciones.module').then( m => m.HistorialAtencionesPageModule)
  },
  {
    path: 'datos-paciente',
    loadChildren: () => import('./veterinario/datos-paciente/datos-paciente.module').then( m => m.DatosPacientePageModule)
  },
  {
    path: 'atencion',
    loadChildren: () => import('./veterinario/atencion/atencion.module').then( m => m.AtencionPageModule)
  },
  {
    path: 'peril',
    loadChildren: () => import('./peluquero/peril/peril.module').then( m => m.PerilPageModule)
  },
  {
    path: 'historial-atenciones',
    loadChildren: () => import('./peluquero/historial-atenciones/historial-atenciones.module').then( m => m.HistorialAtencionesPageModule)
  },
  {
    path: 'datos-paciente',
    loadChildren: () => import('./peluquero/datos-paciente/datos-paciente.module').then( m => m.DatosPacientePageModule)
  },
  {
    path: 'atencion',
    loadChildren: () => import('./peluquero/atencion/atencion.module').then( m => m.AtencionPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./bodega/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./administrador/perfil/perfil.module').then( m => m.PerfilPageModule)
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
