import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth/services/authentication.service';
import { Clientes } from 'src/app/interfaces/models';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  cliente: Clientes = {
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
  };

  login: boolean = false;

  public appPages = [
    { title: 'Inicio', url: '/pages/home', icon: 'home' },
  ];

public DEMO = [
  { label: 'perfil Administrador', url: 'pages/perfiladmin', icon: 'man' },
  { label: 'perfil Bodeguero', url: 'pages/perfilbodega', icon: 'man' },
  { label: 'perfil Cliente', url: 'pages/perfilcliente', icon: 'man' },
  { label: 'perfil Veterinario', url: 'pages/perfilveterinario', icon: 'man' },
  { label: 'perfil Peluquero', url: 'pages/perfilpeluquero', icon: 'man' },
  { label: 'perfil Recepcionista', url: 'pages/perfilrecepcionista', icon: 'man' },
  { label: 'mascota', url: 'pages/mascota', icon: 'man' },
  { label: 'compras cliente', url: 'pages/compras', icon: 'cart' }, 
  { label: 'tienda', url: 'pages/tiendacliente', icon: 'cart' }, 
  { label: 'Productos Administrador', url: 'admin/productoadmin', icon: 'cart' }, 
  { label: 'registrar bodega', url: '/auth/registrobodega', icon: 'finger-print' }, 
  { label: 'registrar administrador', url: '/auth/registroadministrador', icon: 'finger-print' }, 
  { label: 'registrar recepcionista', url: '/auth/registrorecepcionista', icon: 'finger-print' }, 
  { label: 'registrar veterinario', url: '/auth/registroveterinario', icon: 'finger-print' }, 
  { label: 'registrar peluquero', url: '/auth/registropeluquero', icon: 'finger-print' }, 
  
];

  public admin = [
    { label: 'Login', url: '/auth/login', icon: 'finger-print' },
    { label: 'Logout', url: '', icon: 'exit' },
  ];

  public comercial = [
    { label: 'Nuestro equipo', url: '/pages/nuestroequipo', icon: 'people' },
    { label: 'Nosotros', url: '/pages/nosotros', icon: 'book' },
  ];


  constructor(private database: FirestoreService, private auth: AuthenticationService, private router: Router) {
    
    auth.stateAuth().subscribe(res => {
      if (res && res.uid) {
        this.login = true; 
        const id = res.uid;
        const path = 'clientes';
        this.database.getDoc<Clientes>(path, id).subscribe(res => {
          this.cliente = res;
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
