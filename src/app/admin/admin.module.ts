import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { ConfigComponent } from './pages/config/config.component';
import { ProductoComponent } from './pages/producto/producto.component';


@NgModule({
  declarations: [
    ConfigComponent,
    ProductoComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
