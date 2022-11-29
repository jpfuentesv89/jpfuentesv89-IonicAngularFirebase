import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';
import { Razas } from 'src/app/interfaces/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.scss'],
})
export class RazasComponent implements OnInit {

  raza: Razas = {
    id: '',
    especie: '',
    nombre: '',
  };

  razas: any;

  constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService, private datastorage: FirestorageService, private router: Router) {

    auth.stateAuth().subscribe(res => {
      if (res && res.uid) {
      } else {
        this.interaction.presentToast('usuario no logueado');
        console.log('usuario no logueado');
      }
    });

    const path = 'razas';
    this.database.getdocs(path).subscribe(res => {
      this.interaction.presentToast('Productos listados');
      this.razas = res;
    }, err => {
      this.interaction.presentToast('Error al listar productos');
      console.log(err);
    });
  }

  ngOnInit() { }

  limpiarRaza() {
    this.router.navigate(['/admin/razas']);
    this.interaction.refresh();
  }

  excisteRaza(id: string, nombre: string) {
    let existe = false;
    this.razas.forEach((raza: any) => {
      if (raza.id === id || raza.nombre === nombre) {
        existe = false;
      }
    });
    return existe;
  }

  async agregarRaza() {
    if (this.excisteRaza(this.raza.id, this.raza.nombre)) {
      this.interaction.presentToast('La raza ya existe');
    }
    else {
      this.interaction.openLoading('Guardando raza...');
      const path = 'razas';
      const id = this.database.getId();
      this.raza.id = id;
      this.database.createDoc(this.raza, path, id).then(() => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Raza agregada');
        console.log('Raza agregada');
        this.limpiarRaza();
      }).catch(error => {
        this.interaction.closeLoading();
        this.interaction.presentToast('Raza no agregada');
        console.log(error);
      }).catch(error => {
        this.interaction.closeLoading();
        this.interaction.presentToast('No logeado / Raza no agregada');
        console.log(error);
      });
    }
  }

  eliminarRaza(id: string) {
    const path = 'razas';
    this.datastorage.deleteImage(path, id).subscribe(() => {
      this.database.deleteDoc(path, id).then(() => {      
        this.interaction.presentToast('Producto eliminado');
        console.log('Producto eliminado');
        this.limpiarRaza();
      }).catch(error => {
        this.interaction.presentToast('Error al eliminar producto');
        console.log(error);
      });
    }, error => {
      this.interaction.presentToast('Producto no eliminado');
      console.log(error);
    });
  }

  buscarRaza(id: string) {
    this.interaction.openLoading('Buscando producto...');
    const path = 'razas';
    this.database.getDoc<Razas>(path, id).subscribe(res => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Producto encontrado');
      this.raza = res;  
    });
  }

  buscarRazaEvent(event) {
    const id = event.target.value;
    this.buscarRaza(id);
  }


  selctEspecie(event) {
    this.raza.especie = event.detail.value;
  }
  
}
