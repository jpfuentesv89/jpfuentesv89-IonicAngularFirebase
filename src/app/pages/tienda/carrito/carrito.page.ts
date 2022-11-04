import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CarritoService } from 'src/app/services/carrito.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPageCliente implements OnInit {

  cart: any;

  constructor(private carritoService: CarritoService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cart = this.carritoService.getCart();
  }

  decreaseCartItem(product) {
    this.carritoService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.carritoService.addProduct(product);
  }

  removeCartItem(product) {
    this.carritoService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.precio * j.cantidad, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async checkout() {
    // Perfom PayPal or Stripe checkout process

    let alert = await this.alertCtrl.create({
      header: 'Gracias Por tu Pedido!',
      message: 'Te entregaremos tu pedido lo antes posible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
}