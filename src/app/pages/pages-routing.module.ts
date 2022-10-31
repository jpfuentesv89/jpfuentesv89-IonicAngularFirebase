import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilPageAdmin } from './administrador/perfil/perfil.page';
import { PerfilPageBodega } from './bodega/perfil/perfil.page';
import { ComprasPage } from './cliente/compras/compras.page';
import { CrearmascotaPageCliente } from './cliente/crearmascota/crearmascota.page';
import { ListacomprasPageCliente } from './cliente/listacompras/listacompras.page';
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
import { AgendarAtencionesPage } from './recepcionista/agendar-atenciones/agendar-atenciones.page';
import { CobrosPage } from './recepcionista/cobros/cobros.page';
import { CrearClientePageRecepcionista } from './recepcionista/crear-cliente/crear-cliente.page';
import { CrearMascotaPageRecepcionista } from './recepcionista/crear-mascota/crear-mascota.page';
import { HistorialAtencionesPageRecepcionista } from './recepcionista/historial-atenciones/historial-atenciones.page';
import { PerfilPageRecepcionista } from './recepcionista/perfil/perfil.page';
import { ClientePageTienda } from './tienda/cliente/cliente.page';
import { RecepcionistaPageTienda } from './tienda/recepcionista/recepcionista.page';
import { TiendaComponent } from './tienda/tienda.component';
import { VeterinarioPageTienda } from './tienda/veterinario/veterinario.page';
import { AtencionPageVeterinario } from './veterinario/atencion/atencion.page';
import { DatosPacientePageVeterinario } from './veterinario/datos-paciente/datos-paciente.page';
import { HistorialAtencionesPageVeterinario } from './veterinario/historial-atenciones/historial-atenciones.page';
import { PefilPageVeterinario } from './veterinario/peril/peril.page';

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
    path: 'listadecompras',
    component: ListacomprasPageCliente
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
    path: 'crearmascotacliente',
    component: CrearmascotaPageCliente
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
  {
    path: 'agendaratencion',
    component: AgendarAtencionesPage
  },
  {
    path: 'cobros',
    component: CobrosPage
  },
  {
    path: 'crearclienterecepcionista',
    component: CrearClientePageRecepcionista
  },
  {
    path: 'crearmascotarecepcionista',
    component: CrearMascotaPageRecepcionista
  },
  {
    path: 'historialatencionrecepcionista',
    component: HistorialAtencionesPageRecepcionista
  },
  {
    path: 'perfilrecepcionista',
    component: PerfilPageRecepcionista
  },
  {
    path: 'tiendacliente',
    component: ClientePageTienda
  },
  {
    path: 'tiendarecepcionista',
    component: RecepcionistaPageTienda
  },
  {
    path: 'tiendaveterinario',
    component: VeterinarioPageTienda
  },
  {
    path: 'atencionverterinario',
    component: AtencionPageVeterinario
  },
  {
    path: 'datospacienteveterinario',
    component: DatosPacientePageVeterinario
  }, 
  {
    path: 'historialatencionveterinario',
    component: HistorialAtencionesPageVeterinario
  },
  {
    path: 'perfilveterinario',
    component: PefilPageVeterinario
  },
  
  
  
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
