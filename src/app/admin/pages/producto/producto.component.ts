import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { Productos } from 'src/app/interfaces/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  producto: Productos = {
    id: '',
    nombre: '',
    precio: 0,
    descripcion: ''
  };

  constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService) { 

    auth.stateAuth().subscribe(res => {      
      if (res && res.uid) {
        console.log('usuario logueado');

      } else {
        this.interaction.presentToast('usuario no logueado');
        console.log('usuario no logueado');
      }
    });

    
  }

  ngOnInit() {}

  agregarProducto() {
    this.interaction.openLoading('Guardando producto...');
    const path = 'productos';
    this.database.createDoc(this.producto, path, this.producto.id).then(() => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Producto guardado');
    }).catch(err => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Error al guardar producto');
    });
  }

}
