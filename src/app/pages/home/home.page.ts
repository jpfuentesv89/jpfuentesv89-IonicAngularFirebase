import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  login = false;

  constructor(private auth: AuthenticationService, private router: Router) {

    this.auth.stateAuth().subscribe(res => {
      if (res && res.uid) {
        this.login = true; 
      } else {
        this.login = false;
      }
    });

  }

  ngOnInit() {

  }

  iniciar() {
    this.router.navigate(['./auth/login']);
  }

  registro() {
    this.router.navigate(['./auth/registrocliente']);
  }

}
