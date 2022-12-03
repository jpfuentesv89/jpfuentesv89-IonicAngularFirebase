import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';
import { Mascotas, Razas } from 'src/app/interfaces/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponentMascota implements OnInit {

  mascota: Mascotas = {
    id: '',
    especie: '',
    nombre: '',
    sexo: '',
    edad: 0,
    peso: 0,
    raza: '',
    pelaje: '',
    castrado: '',
    vacunas: 0,
    infoextra: '',
    foto: '',
  };

  nuevaImagen = '';
  newfile = '';

  raza: any;

  mascotas: any;

  constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService, private datastorage: FirestorageService, private router: Router) {

    auth.stateAuth().subscribe(res => {
      if (res && res.uid) {

      } else {
        this.interaction.presentToast('usuario no logueado');
        console.log('usuario no logueado');
      }
    });

      this.database.getdocs('razas').subscribe((data: any) => {
        this.raza = data;
      });

  }

  ngOnInit() { }

  excisteMascota(id: string, nombre: string) {
    let existe = false;
    this.mascotas.forEach((mascota: any) => {
      if (mascota.id === id || mascota.nombre === nombre) {
        existe = true;
      }
    });
    return existe;
  }

  async agregarMascota() {
    if (this.excisteMascota(this.mascota.id, this.mascota.nombre)) {
      this.interaction.presentToast('La mascota ya existe');
    }
    else {
      this.interaction.openLoading('Guardando mascota...');
      const path = 'mascotas';
      const id = this.database.getId();
      this.mascota.id = id;
      await this.datastorage.uploadImage(this.newfile, path, id).then(urlImage => {
        this.mascota.foto = urlImage;
        console.log('Imagen subida correctamente.');
        this.database.createDoc(this.mascota, path, id).then(() => {
          this.interaction.closeLoading();
          this.interaction.presentToast('Mascota guardada correctamente.');
          console.log('Mascota guardada correctamente.');
        }).catch(error => {
          this.interaction.closeLoading();
          this.interaction.presentToast('Mascota no guardada.');
          console.log(error);
        });
      }).catch(error => {
        this.interaction.closeLoading();
        this.interaction.presentToast('No logeado / Mascota no guardada.');
        console.log(error);
      });
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

  selctselctPelaje(event) {
    this.mascota.pelaje = event.detail.value;
  }


  selctEspecie(event) {
    this.raza = [];
    this.raza.especie = event.detail.value;
    this.mascota.especie = event.detail.value;
    this.database.getdocs<Razas>('razas').subscribe(res => {
      res.forEach(element => {
        if (element.especie === this.raza.especie) {
          this.raza.push(element);
        }
      });
    });
  }

  selctSexo(event) {
    this.mascota.sexo = event.detail.value;
  }

  selctPelaje(event) {
    this.mascota.pelaje = event.detail.value;
  }
  selctcastrado(event) {
    this.mascota.castrado = event.detail.value;
  }

  selectRaza(event) {
    this.mascota.raza = event.detail.value;
  }

}
