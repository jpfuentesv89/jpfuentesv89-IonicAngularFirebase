import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPageCliente implements OnInit {

  cart: any;
  totalCart: any;
  uid: string;
  uidComprador: string;

  constructor(private carritoService: CarritoService, private modalCtrl: ModalController, private auth: AuthenticationService, private alertCtrl: AlertController, private database: FirestoreService, private interaction: InteractionService,) { }

  ngOnInit() {
    this.cart = this.carritoService.getCart();
    this.auth.stateAuth().subscribe(user => {
      this.uidComprador = user.uid;
    })
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

  generarVenta() {
    this.uid = this.database.getId();
    this.totalCart = {
      Date: new Date(),
      Total: this.getTotal(),
      uidComprador: this.uidComprador,
    };
    this.database.createDoc(this.totalCart, 'ventas', this.uid).then(() => {
      this.database.createDoc(this.cart, 'detalleCompra', this.database.getId()).then(() => {
        this.interaction.presentToast('Venta Generada');
        this.close();
      }).catch(err => {
        this.interaction.presentToast('Error al generar detalle venta');
      });
    }).catch(err => {
      this.interaction.presentToast('Error al generar venta');
    });
  }

  async checkout() {
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