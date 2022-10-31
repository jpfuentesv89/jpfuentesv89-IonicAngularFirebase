import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePageTienda implements OnInit {

  productos: any;

  constructor(private database: FirestoreService, private interaction: InteractionService, private auth: AuthenticationService) {

    auth.stateAuth().subscribe(res => {      
      if (res && res.uid) {

      } else {
        this.interaction.presentToast('usuario no logueado');
        console.log('usuario no logueado');
      }
    });

  }

  ngOnInit() {

    const path = 'productos';
    this.database.getdocs(path).subscribe(res => {
      this.interaction.presentToast('Productos listados');
      this.productos = res;
    }, err => {
      this.interaction.presentToast('Error al listar productos');
      console.log(err);
    });

  }

}
