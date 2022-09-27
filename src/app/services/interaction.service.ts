import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  loading: any;

  constructor(public toastController: ToastController, private loadingCtrl: LoadingController) { }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: 'bottom'
    });

    await toast.present();
  }

  async openLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message: message,
    });

    await this.loading.present();
  }

  async closeLoading() {
    await this.loading.dismiss();
  }

  refresh(): void {
    window.location.reload();
  }

}
