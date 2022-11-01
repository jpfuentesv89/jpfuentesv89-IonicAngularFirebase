import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { Usuario } from 'src/app/interfaces/models';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPageRecepcionista implements OnInit {

  
  recepcionista: Usuario = {
    rut: null,
    dv: '',
    nombre: '',
    apaterno: '',
    amaterno: '',
    direccion: '',
    comuna: '',
    email: '',
    telefono: null,
    username: '',
    uid: '',
    foto: '',
    tipo: 'recepcionista',
  };

  nuevaImagen = '';
  newfile = '';

  constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService, private datastorage: FirestorageService) {

    auth.stateAuth().subscribe(res => {
      if (res && res.uid) {
        this.recepcionista.uid = res.uid;
        this.recepcionista.email = res.email;
        const id = this.recepcionista.uid;
        const path = 'Usuario';
        this.database.getDoc<Usuario>(path, id).subscribe(res => {
          this.recepcionista = res;
        }, err => {
          this.interaction.presentToast('Error al cargar datos');
        });

      } else {
        this.interaction.presentToast('usuario no logueado');
        console.log('usuario no logueado');
      }
    });

  }

  ngOnInit() { }



  borraUser() {
    if (this.recepcionista.uid != '') {
      this.interaction.openLoading('Borrando recepcionista...');
      const id = this.recepcionista.uid;
      const path = 'Usuario';
      this.database.deleteDoc(path, id).then(() => {
        this.interaction.closeLoading();
        this.interaction.presentToast('recepcionista borrado');
      }).catch(err => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Error al borrar recepcionista');
      });
    } else {
      this.interaction.presentToast('usuario no logueado');
    }
  }

  async updateUser() {
    if (this.recepcionista.uid != '') {
      this.interaction.openLoading('Actualizando recepcionista...' + '\ ' + this.recepcionista.email);
      const id = this.recepcionista.uid;
      const path = 'Usuario';
      await this.datastorage.uploadImage(this.newfile, path, id).then(urlImage => {
        this.recepcionista.foto = urlImage;
        console.log('Imagen subida correctamente.');
        this.database.updateDoc(this.recepcionista, path, id).then(() => {
          this.interaction.closeLoading();
          this.interaction.presentToast('recepcionista actualizado');
          this.interaction.refresh();
        }).catch(err => {
          this.interaction.closeLoading();
          this.interaction.presentToast('Error al actualizar recepcionista');
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