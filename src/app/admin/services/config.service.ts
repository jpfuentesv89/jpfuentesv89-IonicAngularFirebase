import { Injectable } from '@angular/core';
import { Clientes, Productos } from 'src/app/interfaces/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

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

  constructor(private database: FirestoreService, private interaction: InteractionService) { }

  agregarUser(id: string, userName: string, email: string) {
    this.interaction.openLoading('Guardando cliente...');
    const path = 'clientes';
    this.cliente.email = email;
    this.cliente.uid = id;
    this.cliente.username = userName;
    this.database.createDoc(this.cliente, path, id).then(() => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Cliente guardado');
    }).catch(err => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Error al guardar cliente');
    });
  }

  borraUser() {
    this.interaction.openLoading('Borrando cliente...');
    const id = this.cliente.rut.toString();
    const path = 'clientes';
    this.database.deleteDoc(path, id).then(() => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Cliente borrado');
    }).catch(err => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Error al borrar cliente');
    });
  }

  updateUser() {
    this.interaction.openLoading('Actualizando cliente...');
    const id = this.cliente.rut.toString();
    const path = 'clientes';
    this.database.updateDoc(this.cliente, path, id).then(() => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Cliente actualizado');
    }).catch(err => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Error al actualizar cliente');
    });
  }

  getUser() {
    this.interaction.openLoading('Buscando cliente...');
    const id = this.cliente.rut.toString();
    const path = 'clientes';
    this.database.getDoc<Clientes>(path, id).subscribe(res => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Cliente encontrado');
      this.cliente = res;
      console.log(res);
    }, err => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Error al buscar cliente');
    });
  }
}
