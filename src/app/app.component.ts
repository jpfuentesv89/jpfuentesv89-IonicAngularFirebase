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
    { title: 'Tienda', url: '/pages/tienda', icon: 'cart' },
  ];

public DEMO = [
  { label: 'perfil administrador', url: 'pages/perfiladmin', icon: 'man' },
];

  public admin = [
    { label: 'Login', url: '/auth/login', icon: 'finger-print' },
    { label: 'Perfil', url: '/admin/config', icon: 'man' },
    { label: 'Productos', url: '/admin/producto', icon: 'cart' },
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
