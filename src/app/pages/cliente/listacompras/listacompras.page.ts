import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';
import { DetalleCompra } from 'src/app/interfaces/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-listacompras',
  templateUrl: './listacompras.page.html',
  styleUrls: ['./listacompras.page.scss'],
})
export class ListacomprasPageCliente implements OnInit {

  detalleVenta : any;

  constructor(private auth: AuthenticationService, private database: FirestoreService, private interaction: InteractionService) { }

  ngOnInit() {
    this.auth.stateAuth().subscribe(res => {
      if (res != null) {
        this.database.getdocs<DetalleCompra>('detalleVenta').subscribe(res => {
          this.detalleVenta = res;
          console.log(this.detalleVenta);
        })
      }
    });
  }
}