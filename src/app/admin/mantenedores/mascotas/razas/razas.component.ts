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

  ngOnInit() { 
  }

  limpiarRaza() {
    this.router.navigate(['/admin/razas']);
    this.interaction.refresh();
  }

  excisteRaza(id: string, nombre: string) {
    let existe = false;
    this.razas.forEach((raza: any) => {
      console.log(raza.id + ' --> ' + raza.nombre);
      if (raza.id === id || raza.nombre === nombre) {
        existe = true;
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

  actualizarRaza(id: string) {
    const path = 'razas';
    this.database.updateDoc(this.raza, path, id).then(() => {
      this.interaction.presentToast('Producto actualizado');
      console.log('Producto actualizado');
      this.limpiarRaza();
    }).catch(error => {
      this.interaction.presentToast('Error al actualizar producto');
      console.log(error);
    });
  }

  selctEspecie(event) {
    this.razas = [];
    this.raza.especie = event.detail.value;
    this.database.getdocs<Razas>('razas').subscribe(res => {
      res.forEach(element => {
        if (element.especie === this.raza.especie) {
          this.razas.push(element);
        }
      });
    });
  }

  selectRazaevent(event) {
    this.raza.id = event.detail.value;
    this.database.getDoc<Razas>('razas', this.raza.id).subscribe(res => {
      this.raza = res;
    });
  }
  
}
