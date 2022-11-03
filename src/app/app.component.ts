import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth/service/authentication.service';
import { Usuario } from 'src/app/interfaces/models';
import { FirestoreService } from './services/firestore.service';

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
  ];

  public cliente = [
    { label: 'Perfil', url: 'pages/perfilcliente', icon: 'man' },
    { label: 'Tienda', url: 'pages/tiendacliente', icon: 'cart' },
  ];

  public peluquero = [
    { label: 'Perfil', url: 'pages/perfilpeluquero', icon: 'man' },
  ];

  public recepcionista = [
    { label: 'Perfil', url: 'pages/perfilrecepcionista', icon: 'man' },
  ];

  public veterinario = [
    { label: 'Perfil', url: 'pages/perfilveterinario', icon: 'man' },
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

  constructor(private database: FirestoreService, private auth: AuthenticationService, private router: Router) {

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

}
