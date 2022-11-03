import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';
import { Usuario } from 'src/app/interfaces/models';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPageBodega implements OnInit {


  bodega: Usuario = {
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
    tipo: 'bodega'
  };

  nuevaImagen = '';
  newfile = '';

  constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService, private datastorage: FirestorageService) {

    auth.stateAuth().subscribe(res => {
      if (res && res.uid) {
        this.bodega.uid = res.uid;
        this.bodega.email = res.email;
        const id = this.bodega.uid;
        const path = 'Usuario';
        this.database.getDoc<Usuario>(path, id).subscribe(res => {
          this.bodega = res;
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
    if (this.bodega.uid != '') {
      this.interaction.openLoading('Borrando bodega...');
      const id = this.bodega.uid;
      const path = 'Usuario';
      this.database.deleteDoc(path, id).then(() => {
        this.interaction.closeLoading();
        this.interaction.presentToast('bodega borrado');
      }).catch(err => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Error al borrar bodega');
      });
    } else {
      this.interaction.presentToast('usuario no logueado');
    }
  }

  async updateUser() {
    if (this.bodega.uid != '') {
      this.interaction.openLoading('Actualizando bodega...' + '\ ' + this.bodega.email);
      const id = this.bodega.uid;
      const path = 'Usuario';
      await this.datastorage.uploadImage(this.newfile, path, id).then(urlImage => {
        this.bodega.foto = urlImage;
        console.log('Imagen subida correctamente.');
        this.database.updateDoc(this.bodega, path, id).then(() => {
          this.interaction.closeLoading();
          this.interaction.presentToast('bodega actualizado');
          this.interaction.refresh();
        }).catch(err => {
          this.interaction.closeLoading();
          this.interaction.presentToast('Error al actualizar bodega');
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