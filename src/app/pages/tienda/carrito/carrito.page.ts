import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';
import { DetalleCompra, Venta } from 'src/app/interfaces/models';
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

  detalleVenta: DetalleCompra = {
    id: '',
    nombre: '',
    precio: 0,
    descripcion: '',
    tipo: '',
    foto: '',
    stock: 0,
    medida: '',
    cantidad: 0,
    uidVenta: '',
  };

  totalCart: Venta = {
    Date: new Date(),
    Total: 0,
    cantidad: 0,
    uidComprador: '',
  };

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
      cantidad: this.cart.length,
      uidComprador: this.uidComprador,
    };
    this.database.createDoc(this.totalCart, 'ventas', this.uid).then(() => {      
      this.cart.forEach(element => {
        this.detalleVenta = {
          id: element.id,
          nombre: element.nombre,
          precio: element.precio,
          descripcion: element.descripcion,
          tipo: element.tipo,
          foto: element.foto,
          stock: element.stock,
          medida: element.medida,
          cantidad: element.cantidad,
          uidVenta: this.uid,
        };
        console.log(this.detalleVenta);
        this.database.createDoc(this.detalleVenta, 'detalleVenta', this.database.getId()).then(() => {
          this.interaction.presentToast('Venta realizada con exito');
          this.carritoService.clearCart();
          this.close();
        }).catch(err => {
          this.interaction.presentToast('Error al realizar la venta');
        });
      });
    }).catch(err => {
      this.interaction.presentToast('Error al realizar la venta');
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