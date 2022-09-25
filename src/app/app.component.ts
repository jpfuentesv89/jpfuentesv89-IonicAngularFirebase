import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
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
    { label: 'Cerrar sesión',url: 'auth/login', icon: 'exit' },
  ];
  constructor() { }
}
