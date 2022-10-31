import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { Clientes } from 'src/app/interfaces/models';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPagePeluquero implements OnInit {

  
  cliente: Clientes = {
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
  };

  nuevaImagen = '';
  newfile = '';

  constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService, private datastorage: FirestorageService) {

    auth.stateAuth().subscribe(res => {
      if (res && res.uid) {
        this.cliente.uid = res.uid;
        this.cliente.email = res.email;
        const id = this.cliente.uid;
        const path = 'clientes';
        this.database.getDoc<Clientes>(path, id).subscribe(res => {
          this.cliente = res;
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
    if (this.cliente.uid != '') {
      this.interaction.openLoading('Borrando cliente...');
      const id = this.cliente.uid;
      const path = 'clientes';
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
    if (this.cliente.uid != '') {
      this.interaction.openLoading('Actualizando cliente...' + '\ ' + this.cliente.email);
      const id = this.cliente.uid;
      const path = 'clientes';
      await this.datastorage.uploadImage(this.newfile, path, id).then(urlImage => {
        this.cliente.foto = urlImage;
        console.log('Imagen subida correctamente.');
        this.database.updateDoc(this.cliente, path, id).then(() => {
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
