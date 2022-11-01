import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { AuthenticationService } from '../../../services/authentication.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponentSignup implements OnInit {


  public signup: FormGroup;

  constructor(private database: FirestoreService, private fb: FormBuilder, private auth: AuthenticationService, private interaction: InteractionService, private router: Router, private datastorage: FirestorageService) {
    this.signup = this.fb.group({
      userName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, [Validators.required]],
      password2: [null, [Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.signup.valid) {
      const { userName, email, password, password2 } = this.signup.value as { userName: string; email: string; password: string; password2: string };
      if (password.length >= 8 ){
      if (password === password2) {
        this.interaction.openLoading('Registrando usuario...');
        const result = await this.auth.signup(email, password).catch(err => console.log(err));
        this.interaction.closeLoading();
        if (result) {
          console.log('Signup successful');
          const path = 'clientes';
          const data = {
            username: userName,
            email: email,
            uid: result.user.uid,
            foto: './assets/img/profile.gif',
          };
          this.database.createDoc(data, path, result.user.uid).then(res => {
            this.interaction.presentToast('Usuario creado');
            this.router.navigate(['/login']);
          }).catch(err => {
            this.interaction.presentToast('Error al crear usuario');
          });
        }
      } else {
        this.interaction.presentToast('Las contraseñas no coinciden');
      }
    } else {
      this.interaction.presentToast('La contraseña debe tener al menos 8 caracteres');
      }
    } else {
      this.interaction.presentToast('Complete los campos');
    }
  }

}
