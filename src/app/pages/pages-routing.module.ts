import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilPageAdmin } from './administrador/perfil/perfil.page';
import { PerfilPageBodega } from './bodega/perfil/perfil.page';
import { ComprasPage } from './cliente/compras/compras.page';
import { DiagnosticoPage } from './cliente/mascotas/diagnostico/diagnostico.page';
import { MascotasPage } from './cliente/mascotas/mascotas/mascotas.page';
import { PerfilPageCliente } from './cliente/perfil/perfil.page';
import { SolicitarAtencionPage } from './cliente/solicitar-atencion/solicitar-atencion.page';
import { HomePage } from './home/home.page';
import { NosotrosPage } from './nosotros/nosotros.page';
import { NuestroequipoPage } from './nuestroequipo/nuestroequipo.page';
import { AtencionPagePeluquero } from './peluquero/atencion/atencion.page';
import { DatosPacientePagePeluquero } from './peluquero/datos-paciente/datos-paciente.page';
import { HistorialAtencionesPagePeluquero } from './peluquero/historial-atenciones/historial-atenciones.page';
import { PefilPagePeluquero} from './peluquero/peril/peril.page';
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
    component: PerfilPageAdmin
  },
  {
    path: 'perfilbodega',
    component: PerfilPageBodega
  },
  {
    path: 'compras',
    component: ComprasPage
  },
  {
    path: 'diagnostico',
    component: DiagnosticoPage
  },
  {
    path: 'mascota',
    component: MascotasPage
  },
  {
    path: 'perfilcliente',
    component: PerfilPageCliente
  },
  {
    path: 'solicitaratencioncliente',
    component: SolicitarAtencionPage
  },
  {
    path: 'atencionpeluquero',
    component: AtencionPagePeluquero
  },
  {
    path: 'datosclientepeluquero',
    component: DatosPacientePagePeluquero
  },
  {
    path: 'historialclientepeluquero',
    component: HistorialAtencionesPagePeluquero
  },
  {
    path: 'perfilpeluquero',
    component: PefilPagePeluquero
  },



  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
