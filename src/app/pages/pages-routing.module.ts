import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilPageAdmin } from './administrador/perfil/perfil.page';
import { RegistroPageadminn } from './administrador/registro/registro.page';

import { PerfilPageBodega } from './bodega/perfil/perfil.page';
import { ComprasPage } from './cliente/compras/compras.page';
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
import { PerfilPagePeluquero} from './peluquero/perfil/perfil.page';
import { AgendarAtencionesPage } from './recepcionista/agendar-atenciones/agendar-atenciones.page';
import { CobrosPage } from './recepcionista/cobros/cobros.page';
import { HistorialAtencionesPageRecepcionista } from './recepcionista/historial-atenciones/historial-atenciones.page';
import { PerfilPageRecepcionista } from './recepcionista/perfil/perfil.page';
import { CarritoPageCliente } from './tienda/carrito/carrito.page';
import { ClientePageTienda } from './tienda/cliente/cliente.page';
import { RecepcionistaPageTienda } from './tienda/recepcionista/recepcionista.page';
import { VeterinarioPageTienda } from './tienda/veterinario/veterinario.page';
import { AtencionPageVeterinario } from './veterinario/atencion/atencion.page';
import { DatosPacientePageVeterinario } from './veterinario/datos-paciente/datos-paciente.page';
import { HistorialAtencionesPageVeterinario } from './veterinario/historial-atenciones/historial-atenciones.page';
import { PerfilPageVeterinario } from './veterinario/perfil/perfil.page';

const routes: Routes = [
  
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
    component: PerfilPagePeluquero
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
    component: PerfilPageVeterinario
  },
  {
    path: 'clientecarrito',
    component: CarritoPageCliente
  },
  {
    path: 'registar',
    component: RegistroPageadminn
  },


  
  

  
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
