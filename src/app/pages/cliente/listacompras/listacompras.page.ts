import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-listacompras',
  templateUrl: './listacompras.page.html',
  styleUrls: ['./listacompras.page.scss'],
})
export class ListacomprasPageCliente implements OnInit {

  totalCart: any;

  constructor(private auth: AuthenticationService, private database: FirestoreService, private interaction: InteractionService) { }

  ngOnInit() {
    this.auth.stateAuth().subscribe(user => {
      if (user && user.uid) {
        this.database.getVenta(user.uid).subscribe(data => {
          this.totalCart = data;
          console.log(this.totalCart);
        });
      }
    })
  }


}