import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';
import { Mascotas } from 'src/app/interfaces/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponentMascota implements OnInit {

    mascota: Mascotas = {
      id: '',
      especie: '',
      nombre: '',
      sexo: '',
      edad: 0,
      peso: 0,
      raza: '',
      pelaje: '',
      castrado: '',
      vacunas: 0,
      infoextra:'',
      foto: '',
    };
  
    nuevaImagen = '';
    newfile = '';
  
    mascotas: any;
  
    constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService, private datastorage: FirestorageService, private router: Router) {
  
      auth.stateAuth().subscribe(res => {
        if (res && res.uid) {
  
        } else {
          this.interaction.presentToast('usuario no logueado');
          console.log('usuario no logueado');
        }
      });
  
      const path = 'mascotas';
      this.database.getdocs(path).subscribe(res => {
        this.interaction.presentToast('Productos listados');
        this.mascotas = res;
      }, err => {
        this.interaction.presentToast('Error al listar productos');
        console.log(err);
      });
  
  
    }
  
    ngOnInit() { }
  
    limpiarMascota() {
      this.router.navigate(['/admin/mascotacliente']);
      this.interaction.refresh();
    }
  
    excisteMascota(id: string, nombre: string) {
      let existe = false;
      this.mascotas.forEach((mascota: any) => {
        if (mascota.id === id || mascota.nombre === nombre) {
          existe = true;
        }
      });
      return existe;
    }
  
    async agregarMascota() {
      if (this.excisteMascota(this.mascota.id, this.mascota.nombre)) { 
        this.interaction.presentToast('El producto ya existe');
      }
      else {
        this.interaction.openLoading('Guardando producto...');
        const path = 'mascotas';
        const id = this.database.getId();
        this.mascota.id = id;
        await this.datastorage.uploadImage(this.newfile, path, id).then(urlImage => {
          this.mascota.foto = urlImage;
          console.log('Imagen subida correctamente.');
          this.database.createDoc(this.mascota, path, id).then(() => {
            this.interaction.closeLoading();
            this.interaction.presentToast('Producto agregado');
            console.log('Producto agregado');
            this.limpiarMascota();
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
  
    eliminarMascota(id: string) {
      const path = 'mascotas';
      this.datastorage.deleteImage(path, id).subscribe(() => {
        this.database.deleteDoc(path, id).then(() => {      
          this.interaction.presentToast('Producto eliminado');
          console.log('Producto eliminado');
          this.limpiarMascota();
        }).catch(error => {
          this.interaction.presentToast('Error al eliminar producto');
          console.log(error);
        });
      }, error => {
        this.interaction.presentToast('Producto no eliminado');
        console.log(error);
      });
    }
  
    buscarMascota(id: string) {
      this.interaction.openLoading('Buscando producto...');
      const path = 'mascotas';
      this.database.getDoc<Mascotas>(path, id).subscribe(res => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Producto encontrado');
        this.mascota = res;
        this.nuevaImagen = res.foto;
      });
    }
  
    buscarMascotaEvent(event) {
      const id = event.target.value;
      this.buscarMascota(id);
    }
  
    actualizarMascota() {
      const path = 'mascotas';
      if (this.nuevaImagen === this.mascota.foto) {
        this.database.updateDoc(this.mascota, path, this.mascota.id).then(() => {
          this.interaction.presentToast('Producto actualizado');
          console.log('Producto actualizado');
          this.limpiarMascota();
        }).catch(error => {
          this.interaction.presentToast('Producto no actualizado');
          console.log(error);
        });
    } else {
      this.datastorage.uploadImage(this.newfile, path, this.mascota.id).then(urlImage => {
        this.mascota.foto = urlImage;
        console.log('Imagen subida correctamente.');
        this.database.updateDoc(this.mascota, path, this.mascota.id).then(() => {
          this.interaction.presentToast('Producto actualizado');
          console.log('Producto actualizado');
          this.limpiarMascota();
        }).catch(error => {
          this.interaction.presentToast('Producto no actualizado');
          console.log(error);
        });
      }).catch(error => {
        console.log('Error al subir imagen');
        console.log(error);
      });
    }}

    selctselctPelaje(event) {
      this.mascota.pelaje = event.detail.value;
    }
    

    selctEspecie(event) {
      this.mascota.especie= event.detail.value;
    }
    
    selctSexo(event) {
      this.mascota.sexo= event.detail.value;
    }
  
    selctPelaje(event) {
      this.mascota.pelaje= event.detail.value;
    }
    selctcastrado(event) {
      this.mascota.castrado= event.detail.value;
    }
  

  }
  