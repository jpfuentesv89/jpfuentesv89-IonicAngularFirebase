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


@NgModule({
  declarations: [
    TiendaComponent,
    HomePage,
    NuestroequipoPage,
    NosotrosPage,
    PerfilPageAdmin,
    PerfilPageBodega,
    ComprasPage,
    DiagnosticoPage,
    MascotasPage,
    SolicitarAtencionPage,
    AtencionPagePeluquero,
    DatosPacientePagePeluquero,
    HistorialAtencionesPagePeluquero,
    PefilPagePeluquero,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
