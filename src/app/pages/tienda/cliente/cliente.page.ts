import { CarritoService } from 'src/app/services/carrito.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CarritoPageCliente } from '../carrito/carrito.page';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePageTienda implements OnInit {
  carrito = [];
  productos: any;
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(private database: FirestoreService, private interaction: InteractionService, private carritoService: CarritoService, private modalCtrl: ModalController) {

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
    this.carrito = this.carritoService.getCart();
    this.cartItemCount = this.carritoService.getCartItemCount();
  }

  addToCart(product) {
    this.carritoService.addProduct(product);
    this.interaction.presentToast('Producto agregado al carrito');
  }

  async openCart() {
    if
    (this.carrito.length > 0) {
      let modal = await this.modalCtrl.create({
        component: CarritoPageCliente,
        cssClass: 'cart-modal'
      });
      modal.present();
    } else {
      this.interaction.presentToast('No hay productos en el carrito');
    }
  }
}
