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
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
