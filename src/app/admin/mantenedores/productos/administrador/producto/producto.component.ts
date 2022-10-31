import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { Productos } from 'src/app/interfaces/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponentAdmin implements OnInit {

  producto: Productos = {
    id: '',
    nombre: '',
    precio: 0,
    descripcion: '',
    foto: ''
  };

  nuevaImagen = '';
  newfile = '';

  productos: any;

  constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService, private datastorage: FirestorageService, private router: Router) {

    auth.stateAuth().subscribe(res => {
      if (res && res.uid) {

      } else {
        this.interaction.presentToast('usuario no logueado');
        console.log('usuario no logueado');
      }
    });

    const path = 'productos';
    this.database.getdocs(path).subscribe(res => {
      this.interaction.presentToast('Productos listados');
      this.productos = res;
    }, err => {
      this.interaction.presentToast('Error al listar productos');
      console.log(err);
    });


  }

  ngOnInit() { }

  limpiarProducto() {
    this.router.navigate(['/admin/producto']);
    this.interaction.refresh();
  }

  excisteProducto(id: string, nombre: string) {
    let existe = false;
    this.productos.forEach((producto: any) => {
      if (producto.id === id || producto.nombre === nombre) {
        existe = true;
      }
    });
    return existe;
  }

  async agregarProducto() {
    if (this.excisteProducto(this.producto.id, this.producto.nombre)) { 
      this.interaction.presentToast('El producto ya existe');
    }
    else {
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
          this.limpiarProducto();
        }).catch(error => {
          this.interaction.closeLoading();
          this.interaction.presentToast('Producto no agregado');
          console.log(error);
        });
      }).catch(error => {
        this.interaction.closeLoading();
        this.interaction.presentToast('No logeado / producto no agregado');
        console.log(error);
      });
    }
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

  eliminarProducto(id: string) {
    const path = 'productos';
    this.datastorage.deleteImage(path, id).subscribe(() => {
      this.database.deleteDoc(path, id).then(() => {      
        this.interaction.presentToast('Producto eliminado');
        console.log('Producto eliminado');
        this.limpiarProducto();
      }).catch(error => {
        this.interaction.presentToast('Error al eliminar producto');
        console.log(error);
      });
    }, error => {
      this.interaction.presentToast('Producto no eliminado');
      console.log(error);
    });
  }

  buscarProducto(id: string) {
    this.interaction.openLoading('Buscando producto...');
    const path = 'productos';
    this.database.getDoc<Productos>(path, id).subscribe(res => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Producto encontrado');
      this.producto = res;
      this.nuevaImagen = res.foto;
    });
  }

  buscarProductoEvent(event) {
    const id = event.target.value;
    this.buscarProducto(id);
  }

  actualizarProducto() {
    const path = 'productos';
    if (this.nuevaImagen === this.producto.foto) {
      this.database.updateDoc(this.producto, path, this.producto.id).then(() => {
        this.interaction.presentToast('Producto actualizado');
        console.log('Producto actualizado');
        this.limpiarProducto();
      }).catch(error => {
        this.interaction.presentToast('Producto no actualizado');
        console.log(error);
      });
  } else {
    this.datastorage.uploadImage(this.newfile, path, this.producto.id).then(urlImage => {
      this.producto.foto = urlImage;
      console.log('Imagen subida correctamente.');
      this.database.updateDoc(this.producto, path, this.producto.id).then(() => {
        this.interaction.presentToast('Producto actualizado');
        console.log('Producto actualizado');
        this.limpiarProducto();
      }).catch(error => {
        this.interaction.presentToast('Producto no actualizado');
        console.log(error);
      });
    }).catch(error => {
      console.log('Error al subir imagen');
      console.log(error);
    });
  }}
}
