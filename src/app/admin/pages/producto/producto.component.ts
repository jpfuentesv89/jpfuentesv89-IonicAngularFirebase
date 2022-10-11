import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { Productos } from 'src/app/interfaces/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { FirestorageService } from 'src/app/services/firestorage.service';

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
    descripcion: '',
    foto: ''
  };

  nuevaImagen = '';
  newfile = '';

  constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService, private datastorage: FirestorageService) {

    auth.stateAuth().subscribe(res => {
      if (res && res.uid) {
        console.log('usuario logueado');

      } else {
        this.interaction.presentToast('usuario no logueado');
        console.log('usuario no logueado');
      }
    });


  }

  ngOnInit() { }

  async agregarProducto() {
    this.interaction.openLoading('Guardando producto...');
    const path = 'productos';
    const id = this.database.getId();
    this.producto.id = id;
    await this.datastorage.uploadImage(this.newfile, path, id).then(urlImage => {
      this.producto.foto = urlImage;
      console.log('Imagen subida correctamente.');
      this.database.createDoc(this.producto, path, id).then(() => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Producto agregado');
        console.log('Producto agregado');
      }).catch(error => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Producto no agregado');
        console.log(error);
      });
    }).catch(error => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Imagen no subida');
      console.log(error);
    });
  }


  async selectImagen(event) {
    if (event.target.files && event.target.files[0]) {
      this.newfile = event.target.files[0];
      const file = new FileReader();
      file.onload = (e) => {
        this.nuevaImagen = file.result as string;
      };
      file.readAsDataURL(event.target.files[0]);
    }
  }


}
