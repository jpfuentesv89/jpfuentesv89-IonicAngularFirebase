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
    correo: '',
    telefono: null
  };

  constructor(private database: FirestoreService, private interaction: InteractionService) { }

  ngOnInit() { }

  agregarUser() {
    this.interaction.openLoading('Guardando cliente...');
    const id = this.cliente.rut.toString();
    const path = 'clientes';
    this.database.createDoc(this.cliente, path, id).then(() => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Cliente guardado');
    }).catch(err => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Error al guardar cliente');
    });
  }

  
}