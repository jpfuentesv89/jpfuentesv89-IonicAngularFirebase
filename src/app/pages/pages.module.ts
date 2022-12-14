import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
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
import { PerfilPagePeluquero } from './peluquero/perfil/perfil.page';
import { AgendarAtencionesPage } from './recepcionista/agendar-atenciones/agendar-atenciones.page';
import { CobrosPage } from './recepcionista/cobros/cobros.page';
import { HistorialAtencionesPageRecepcionista } from './recepcionista/historial-atenciones/historial-atenciones.page';
import { PerfilPageRecepcionista } from './recepcionista/perfil/perfil.page';
import { ClientePageTienda } from './tienda/cliente/cliente.page';
import { RecepcionistaPageTienda } from './tienda/recepcionista/recepcionista.page';
import { VeterinarioPageTienda } from './tienda/veterinario/veterinario.page';
import { AtencionPageVeterinario } from './veterinario/atencion/atencion.page';
import { DatosPacientePageVeterinario } from './veterinario/datos-paciente/datos-paciente.page';
import { HistorialAtencionesPageVeterinario } from './veterinario/historial-atenciones/historial-atenciones.page';
import { PerfilPageVeterinario } from './veterinario/perfil/perfil.page';
import { PerfilPageCliente } from './cliente/perfil/perfil.page';
import { FormsModule } from '@angular/forms';
import { ListacomprasPageCliente } from './cliente/listacompras/listacompras.page';
import { CarritoPageCliente } from './tienda/carrito/carrito.page';
import { RegistroPageadminn } from './administrador/registro/registro.page';




@NgModule({
  declarations: [
    HomePage,
    NuestroequipoPage,
    NosotrosPage,
    PerfilPageAdmin,
    PerfilPageBodega,
    ComprasPage,
    ListacomprasPageCliente,
    DiagnosticoPage,
    MascotasPage,
    PerfilPageCliente,
    SolicitarAtencionPage,
    AtencionPagePeluquero,
    DatosPacientePagePeluquero,
    HistorialAtencionesPagePeluquero,
    PerfilPagePeluquero,
    AgendarAtencionesPage,
    CobrosPage,
    HistorialAtencionesPageRecepcionista,
    PerfilPageRecepcionista,
    ClientePageTienda,
    RecepcionistaPageTienda,
    VeterinarioPageTienda,
    AtencionPageVeterinario,
    DatosPacientePageVeterinario,
    HistorialAtencionesPageVeterinario,
    PerfilPageVeterinario,
    CarritoPageCliente,
    RegistroPageadminn,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }

