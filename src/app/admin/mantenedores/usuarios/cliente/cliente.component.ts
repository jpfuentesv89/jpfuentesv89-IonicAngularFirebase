import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';
import { Usuario } from 'src/app/interfaces/models';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponentCliente implements OnInit {

  
  usuario: Usuario = {
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
    tipo: '',
  };

  nuevaImagen = '';
  newfile = '';

  constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService, private datastorage: FirestorageService) {

    auth.stateAuth().subscribe(res => {
      if (res && res.uid) {
        this.usuario.uid = res.uid;
        this.usuario.email = res.email;
        const id = this.usuario.uid;
        const path = 'Usuario';
        this.database.getDoc<Usuario>(path, id).subscribe(res => {
          this.usuario = res;
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
    if (this.usuario.uid != '') {
      this.interaction.openLoading('Borrando usuario...');
      const id = this.usuario.uid;
      const path = 'Usuario';
      this.database.deleteDoc(path, id).then(() => {
        this.interaction.closeLoading();
        this.interaction.presentToast('usuario borrado');
      }).catch(err => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Error al borrar usuario');
      });
    } else {
      this.interaction.presentToast('usuario no logueado');
    }
  }

  async updateUser() {
    if (this.usuario.uid != '') {
      this.interaction.openLoading('Actualizando usuario...' + '\ ' + this.usuario.email);
      const id = this.usuario.uid;
      const path = 'Usuario';
      await this.datastorage.uploadImage(this.newfile, path, id).then(urlImage => {
        this.usuario.foto = urlImage;
        console.log('Imagen subida correctamente.');
        this.database.updateDoc(this.usuario, path, id).then(() => {
          this.interaction.closeLoading();
          this.interaction.presentToast('usuario actualizado');
          this.interaction.refresh();
/*DESPUES DE MODIFICAR LOS DATOS REDIRIGIR AL PERFIL*/ 
        }).catch(err => {
          this.interaction.closeLoading();
          this.interaction.presentToast('Error al actualizar usuario');
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