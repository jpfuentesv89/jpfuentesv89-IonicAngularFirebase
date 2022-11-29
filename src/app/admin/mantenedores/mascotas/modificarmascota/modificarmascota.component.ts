import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';
import { Mascotas } from 'src/app/interfaces/models';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificarmascota',
  templateUrl: './modificarmascota.component.html',
  styleUrls: ['./modificarmascota.component.scss'],
})
export class ModificarmascotaComponent implements OnInit {

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

  constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService, private datastorage: FirestorageService) {

    
 
    auth.stateAuth().subscribe(res => {
      if (res && res.uid) {

      } else {
        this.interaction.presentToast('usuario no logueado');
        console.log('usuario no logueado');
      }
    });
  }

  ngOnInit() { }



  borraUser() {
    if (this.mascota.id != '') {
      this.interaction.openLoading('Borrando cliente...');
      const id = this.mascota.id;
      const path = 'mascotas';
      this.database.deleteDoc(path, id).then(() => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Cliente borrado');
      }).catch(err => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Error al borrar cliente');
      });
    } else {
      this.interaction.presentToast('usuario no logueado');
    }
  }

  async updateUser() {
    if (this.mascota.id != '') {
      this.interaction.openLoading('Actualizando cliente...' + '\ ' + this.mascota.id);
      const id = this.mascota.id;
      const path = 'Usuario';
      await this.datastorage.uploadImage(this.newfile, path, id).then(urlImage => {
        this.mascota.foto = urlImage;
        console.log('Imagen subida correctamente.');
        this.database.updateDoc(this.mascota, path, id).then(() => {
          this.interaction.closeLoading();
          this.interaction.presentToast('Cliente actualizado');
          this.interaction.refresh();
        }).catch(err => {
          this.interaction.closeLoading();
          this.interaction.presentToast('Error al actualizar cliente');
        });
      }).catch(error => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Imagen no subida');
        console.log(error);
      });
    } else {
      this.interaction.presentToast('usuario no logueado');
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
  


}  



