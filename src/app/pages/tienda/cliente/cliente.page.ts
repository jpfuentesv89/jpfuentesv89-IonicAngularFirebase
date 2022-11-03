import { CarritoService } from 'src/app/services/carrito.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CarritoPageCliente } from '../carrito/carrito.page';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePageTienda implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(private carritoService: CarritoService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.products = this.carritoService.getProducts();
    this.cart = this.carritoService.getCart();
    this.cartItemCount = this.carritoService.getCartItemCount();
  }

  addToCart(product) {
    this.carritoService.addProduct(product);
    this.animateCSS('tada');
  }

  async openCart() {
    this.animateCSS('bounceOutLeft', true);

    let modal = await this.modalCtrl.create({
      component: CarritoPageCliente,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)

    //https://github.com/daneden/animate.css
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }
}


/**
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/service/authentication.service';
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

  suma() {
    let cantidad = 1;
    cantidad++;
  }

  resta() {
    let cantidad = 1;
    cantidad--;
  }

}
*///
