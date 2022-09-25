import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor(public toastController: ToastController) { }

  async presentToast(position, message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: position
    });

    await toast.present();
  }

}
