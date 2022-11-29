import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.page.html',
  styleUrls: ['./mascotas.page.scss'],
})
export class MascotasPage implements OnInit {

  mascotas: any;
  
  constructor(private database: FirestoreService, private interaction: InteractionService,  ) {
  }

  ngOnInit() {
    const path = 'mascotas';
    this.database.getdocs(path).subscribe(res => {
      this.interaction.presentToast('Mascotas listadas');
      this.mascotas = res;
    }, err => {
      this.interaction.presentToast('Error al listar Mascotas');
      console.log(err);
    });
   
  }
}
