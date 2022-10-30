import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { TiendaComponent } from './tienda/tienda.component';
import { NuestroequipoPage } from './nuestroequipo/nuestroequipo.page';
import { HomePage } from './home/home.page';
import { NosotrosPage } from './nosotros/nosotros.page';
import { PerfilPageAdmin } from './administrador/perfil/perfil.page';
import { PerfilPageBodega } from './bodega/perfil/perfil.page';
import { ComprasPage } from './cliente/compras/compras.page';
import { DiagnosticoPage } from './cliente/mascotas/diagnostico/diagnostico.page';
import { MascotasPage } from './cliente/mascotas/mascotas/mascotas.page';
import { SolicitarAtencionPage } from './cliente/solicitar-atencion/solicitar-atencion.page';
import { AtencionPagePeluquero } from './peluquero/atencion/atencion.page';
import { DatosPacientePagePeluquero } from './peluquero/datos-paciente/datos-paciente.page';
import { HistorialAtencionesPagePeluquero } from './peluquero/historial-atenciones/historial-atenciones.page';
import { PefilPagePeluquero } from './peluquero/peril/peril.page';
import { AgendarAtencionesPage } from './recepcionista/agendar-atenciones/agendar-atenciones.page';
import { CobrosPage } from './recepcionista/cobros/cobros.page';
import { CrearClientePageRecepcionista } from './recepcionista/crear-cliente/crear-cliente.page';
import { CrearMascotaPageRecepcionista } from './recepcionista/crear-mascota/crear-mascota.page';
import { HistorialAtencionesPageRecepcionista } from './recepcionista/historial-atenciones/historial-atenciones.page';
import { PerfilPageRecepcionista } from './recepcionista/perfil/perfil.page';
import { ClientePageTienda } from './tienda/cliente/cliente.page';
import { RecepcionistaPageTienda } from './tienda/recepcionista/recepcionista.page';
import { VeterinarioPageTienda } from './tienda/veterinario/veterinario.page';
import { AtencionPageVeterinario } from './veterinario/atencion/atencion.page';
import { DatosPacientePageVeterinario } from './veterinario/datos-paciente/datos-paciente.page';
import { HistorialAtencionesPageVeterinario } from './veterinario/historial-atenciones/historial-atenciones.page';
import { PefilPageVeterinario } from './veterinario/peril/peril.page';
import { ModificarmascotaPage } from './cliente/modificarmascota/modificarmascota.page';
import { ModificarperfilPageCliente } from './cliente/modificarperfil/modificarperfil.page';
import { CrearmascotaPageCliente } from './cliente/crearmascota/crearmascota.page';



@NgModule({
  declarations: [
    TiendaComponent,
    HomePage,
    NuestroequipoPage,
    NosotrosPage,
    PerfilPageAdmin,
    PerfilPageBodega,
    ComprasPage,
    ListacomprasPageCliente,
    DiagnosticoPage,
    MascotasPage,
    ModificarmascotaPage,
    CrearmascotaPageCliente,
    ModificarperfilPageCliente,
    SolicitarAtencionPage,
    AtencionPagePeluquero,
    DatosPacientePagePeluquero,
    HistorialAtencionesPagePeluquero,
    PefilPagePeluquero,
    AgendarAtencionesPage,
    CobrosPage,
    CrearClientePageRecepcionista,
    CrearMascotaPageRecepcionista,
    HistorialAtencionesPageRecepcionista,
    PerfilPageRecepcionista,
    ClientePageTienda,
    RecepcionistaPageTienda,
    VeterinarioPageTienda,
    AtencionPageVeterinario,
    DatosPacientePageVeterinario,
    HistorialAtencionesPageVeterinario,
    PefilPageVeterinario,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
