import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/interfaces/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {

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
  };

  constructor(private database: FirestoreService, private interaction: InteractionService) { }

  ngOnInit() { }

  borraUser() {
    if (this.cliente.rut != null) {
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
    } else {
      this.interaction.presentToast('Ingrese un rut');
    }
  }

  updateUser() {
    if (this.cliente.rut != null) {
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
    } else {
      this.interaction.presentToast('Debe ingresar un rut y buscar el cliente');
    }
  }

  getUser() {
    if (this.cliente.rut != null) {
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
    } else {
      this.interaction.presentToast('Ingrese un rut');
    }
  }
}