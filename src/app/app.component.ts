import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth/services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  login: boolean = false; 
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Casos', url: '/folder/Casos', icon: 'heart' },
    { title: 'Quiénes somos', url: '/folder/Quiénes somos', icon: 'book' },
    { title: 'Nuestro equipo', url: '/folder/Nuestro equipo', icon: 'people' },
    { title: 'Galería', url: '/folder/Galería', icon: 'image' },
    { title: 'Contáctanos', url: '/folder/Contáctanos', icon: 'mail' },
  ];
  public labels = [
    { label: 'Donaciones', url: '/folder/Donaciones', icon: 'wallet' },
    { label: 'Apadrinamiento', url: '/folder/Apadrinamiento', icon: 'paw' },
    { label: 'Unetenos', url: '/folder/Unetenos', icon: 'man' },
  ];
  public labels2 = [
    { label: 'Login', url: '/auth/login', icon: 'finger-print' },
    { label: 'Ajustes', url: '/admin/config', icon: 'cog' },
    { label: 'Logout', url: '', icon: 'exit' },
  ];
  constructor(private auth: AuthenticationService, private router: Router) {
    auth.stateAuth().subscribe(res => {
      if (res && res.uid) {
        console.log('usuario logueado');
        this.login = true;
      } else {
        console.log('usuario no logueado');
        this.login = false;
      }
    });   
  }
  logout = () => {
    this.auth.logout();
    this.router.navigate(['/folder/Inicio']);
  }
}
