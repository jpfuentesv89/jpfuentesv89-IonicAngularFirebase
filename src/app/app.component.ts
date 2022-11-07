import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth/service/authentication.service';
import { Usuario } from 'src/app/interfaces/models';
import { FirestoreService } from './services/firestore.service';
import { ActionSheetController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  usuario: Usuario = {
    rut: null,
    dv: '',
    nombre: '',
    apaterno: '',
    amaterno: '',
    direccion: '',
    comuna: '',
    email: '',
    telefono: null,
    username: '',
    uid: '',
    foto: '',
    tipo: '',
  };

  login: boolean = false;

  public administrador = [
    { label: 'Perfil', url: 'pages/perfiladmin', icon: 'man' },
    { label: 'Registro Bodeguero', url: '/auth/registrobodega', icon: 'finger-print' },
    { label: 'Registro Administrador', url: '/auth/registroadministrador', icon: 'finger-print' },
    { label: 'Registro Recepcionista', url: '/auth/registrorecepcionista', icon: 'finger-print' },
    { label: 'Registro Veterinario', url: '/auth/registroveterinario', icon: 'finger-print' },
    { label: 'Registro Peluquero', url: '/auth/registropeluquero', icon: 'finger-print' },


  ];

  public bodega = [
    { label: 'Perfil', url: 'pages/perfilbodega', icon: 'man' },
    { label: 'Agregar Producto', url: 'admin/productosbodega', icon: 'bag' },
    { label: 'Agregar tipo de producto', url: 'admin/tipoproducto', icon: 'layers' },
    { label: 'Lista de productos', url: 'admin/listadoproductosbodega', icon: 'bag-check' },
    { label: 'Historial de cambios', url: 'admin/historialcambiosproductobodega', icon: 'file-tray' },
  ];

  public cliente = [
    { label: 'Perfil', url: 'pages/perfilcliente', icon: 'man' },
    { label: 'Mascotas', url: 'pages/mascota', icon: 'paw' },
    { label: 'Solicitar atencion', url: 'pages/solicitaratencioncliente', icon: 'calendar' },
    { label: 'Tienda', url: 'pages/tiendacliente', icon: 'cart' },
    { label: 'Historial de compras', url: 'pages/listadecompras', icon: 'create' },

  ];

  public peluquero = [
    { label: 'Perfil', url: 'pages/perfilpeluquero', icon: 'man' },
    { label: 'atencion peluquero', url: 'pages/atencionpeluquero', icon: 'cut' },
    { label: 'Datos Cliente', url: 'pages/datosclientepeluquero', icon: 'create' },
    { label: 'Historial atenciones', url: 'pages/historialclientepeluquero', icon: 'calendar' },
    { label: 'Tienda', url: 'pages/tiendaveterinario', icon: 'cart' },
  ];

  public recepcionista = [
    { label: 'Perfil', url: 'pages/perfilrecepcionista', icon: 'man' },
    { label: 'Agregar Cliente', url: '/auth/registrocliente', icon: 'finger-print' },
    { label: 'Agregar Mascota', url: '/admin/mascotarecepcionista', icon: 'paw' },
    { label: 'Historial Atenciones', url: '/pages/historialatencionrecepcionista', icon: 'calendar' },
    { label: 'Tienda', url: '/pages/tiendarecepcionista', icon: 'cart' },

  ];

  public veterinario = [
    { label: 'Perfil', url: 'pages/perfilveterinario', icon: 'man' },
    { label: 'Tienda', url: 'pages/tiendaveterinario', icon: 'cart' },
    { label: 'Atencion', url: 'pages/atencionverterinario', icon: 'paw' },
    { label: 'Pacientes', url: 'pages/datospacienteveterinario', icon: 'paw' },
    { label: 'Historial atenciones', url: 'pages/historialatencionveterinario', icon: 'calendar' },

  ];

  public appPages = [
    { title: 'Inicio', url: '/pages/home', icon: 'home' },
  ];

  public sesion = [
    { label: 'Login', url: '/auth/login', icon: 'finger-print' },
    { label: 'Logout', url: '', icon: 'exit' },
  ];

  public comercial = [
    { label: 'Nuestro equipo', url: '/pages/nuestroequipo', icon: 'people' },
    { label: 'Nosotros', url: '/pages/nosotros', icon: 'book' },

  ];



  tipoUsuario() {
    if (this.usuario.tipo == 'administrador') {
      return this.administrador;
    } else if (this.usuario.tipo == 'bodega') {
      return this.bodega;
    } else if (this.usuario.tipo == 'cliente') {
      return this.cliente;
    } else if (this.usuario.tipo == 'peluquero') {
      return this.peluquero;
    } else if (this.usuario.tipo == 'recepcionista') {
      return this.recepcionista;
    } else if (this.usuario.tipo == 'veterinario') {
      return this.veterinario;
    }
  }

  constructor(private database: FirestoreService, private auth: AuthenticationService, private router: Router, private platform: Platform, private actionSheetCtrl: ActionSheetController) {

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.salir();
    });

    auth.stateAuth().subscribe(res => {
      if (res && res.uid) {
        this.login = true;
        const id = res.uid;
        const path = 'Usuario';
        this.database.getDoc<Usuario>(path, id).subscribe(res => {
          this.usuario = res;
        }, err => {
          console.log('Error al cargar datos');
        });
      } else {
        this.login = false;
      }
    });

  }

  logout() {
    this.auth.logout();
    console.log('Sesión cerrada');
    this.router.navigate(['/pages/home']);
  }

  async salir() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Quieres salir?',
      subHeader: 'Confirma presionando una de las opciones',
      buttons: [
        {
          text: 'Salir',
          role: 'destructive',
          icon: 'exit',
          handler: () => {
            this.logout();
            navigator['app'].exitApp();
          }
        },
        {
          text: 'Quedarme',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ],
    });
    actionSheet.present();
  }


}
