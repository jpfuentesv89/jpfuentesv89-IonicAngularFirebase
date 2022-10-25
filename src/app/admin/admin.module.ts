import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ConfigComponent } from './pages/config/config.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ClienteComponentMascota } from './mantenedores/mascotas/cliente/cliente.component';
import { DiagnosticoComponentMascota } from './mantenedores/mascotas/diagnostico/diagnostico.component';
import { EspecieComponent } from './mantenedores/mascotas/especie/especie.component';
import { PelajeComponent } from './mantenedores/mascotas/pelaje/pelaje.component';
import { RazasComponent } from './mantenedores/mascotas/razas/razas.component';
import { RecepcionistaComponentMascota } from './mantenedores/mascotas/recepcionista/recepcionista.component';
import { TipoaTencionComponent } from './mantenedores/mascotas/tipoa-tencion/tipoa-tencion.component';
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
import { PersonaComponent } from './mantenedores/persona/persona.component';


@NgModule({
  declarations: [
    ConfigComponent,
    ProductoComponent,
    ClienteComponentMascota,
    DiagnosticoComponentMascota,
    EspecieComponent,
    PelajeComponent,
    RazasComponent,
    RecepcionistaComponentMascota,
    TipoaTencionComponent,
    HistorialCambiosComponentAdmin,
    ListadoProductoComponentAdmin,
    ProductoComponentAdmin,
    HistorialCambiosComponentBodega,
    ListadoProductoComponentBodega,
    ProductoComponentBodega,
    TipoPoductosComponent,
    AdministradorComponentAdministrador,
    BodegaComponentAdministrador,
    ClienteComponentAdministrador,
    PeluqueroComponentAdministrador,
    VeterinarioComponentAdministrador,
    ClienteComponentCliente,
    ComunaComponent,
    GeneroComponent,
    ClienteComponentRecepcionista,
    RecepcionistaComponent,
    RegionComponent,
    PersonaComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
