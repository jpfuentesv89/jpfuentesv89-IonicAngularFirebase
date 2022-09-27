import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
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

  constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService) {

    auth.stateAuth().subscribe(res => {      
      if (res && res.uid) {
        console.log('usuario logueado');        
        this.cliente.uid = res.uid;
        this.cliente.email= res.email;
        const id = this.cliente.uid;
        const path = 'clientes';
        this.database.getDoc<Clientes>(path, id).subscribe(res => {
          this.cliente = res;
          console.log(res);
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

  updateUser() {
    if (this.cliente.uid != '') {
      this.interaction.openLoading('Actualizando cliente...' + '\ ' + this.cliente.email);
      const id = this.cliente.uid;
      const path = 'clientes';
      this.database.updateDoc(this.cliente, path, id).then(() => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Cliente actualizado');
        this.interaction.refresh();
      }).catch(err => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Error al actualizar cliente');
      });
    } else {
      this.interaction.presentToast('usuario no logueado');
    }
  }
}