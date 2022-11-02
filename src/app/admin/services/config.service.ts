import { Injectable } from '@angular/core';
import { Usuario, Productos } from 'src/app/interfaces/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

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

  constructor(private database: FirestoreService, private interaction: InteractionService) { }

  borraUser() {
    this.interaction.openLoading('Borrando usuario...');
    const id = this.usuario.rut.toString();
    const path = 'Usuario';
    this.database.deleteDoc(path, id).then(() => {
      this.interaction.closeLoading();
      this.interaction.presentToast('usuario borrado');
    }).catch(err => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Error al borrar usuario');
    });
  }

  updateUser() {
    this.interaction.openLoading('Actualizando usuario...');
    const id = this.usuario.rut.toString();
    const path = 'Usuario';
    this.database.updateDoc(this.usuario, path, id).then(() => {
      this.interaction.closeLoading();
      this.interaction.presentToast('usuario actualizado');
    }).catch(err => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Error al actualizar usuario');
    });
  }

  getUser() {
    this.interaction.openLoading('Buscando usuario...');
    const id = this.usuario.rut.toString();
    const path = 'Usuario';
    this.database.getDoc<Usuario>(path, id).subscribe(res => {
      this.interaction.closeLoading();
      this.interaction.presentToast('usuario encontrado');
      this.usuario = res;
      console.log(res);
    }, err => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Error al buscar usuario');
    });
  }
}
