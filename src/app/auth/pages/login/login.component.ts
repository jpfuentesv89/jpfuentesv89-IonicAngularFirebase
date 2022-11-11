import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';
import { AuthenticationService } from '../../service/authentication.service';
import { NativeBiometric } from "capacitor-native-biometric";
import { FirestoreService } from 'src/app/services/firestore.service';
import { credentialsBiometric } from 'src/app/interfaces/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public credentials: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private interaction: InteractionService, private database: FirestoreService, private router: Router) {
    this.credentials = this.fb.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]],
        check: [null]
      }
    );
  }

  ngOnInit() { }

  async onSubmit() {
    if (this.credentials.valid) {
      this.interaction.openLoading('Iniciando sesión...');
      const { email, password, check } = this.credentials.value as { email: string; password: string; check: boolean };
      const result = await this.auth.login(email, password).catch(err => console.log(err));
      this.interaction.presentToast('Usuario o Contraseña incorrectos');
      this.interaction.closeLoading();
      if (result) {
        console.log('inicio de sesión exitoso');
        if (check) {
          this.interaction.presentToast('Autenticación Biométrica Activada');
          this.database.createDoc({ email: email, password: password, check: check }, 'Biometric', result.user.uid).then(res => {
            this.interaction.presentToast('Datos guardados');
          }).catch(err => {
            this.interaction.presentToast('Error al guardar datos');
          });
        } else {
          this.database.getDoc<credentialsBiometric>(result.user.uid, 'Biometric').subscribe(res => {
            if (res) {
              this.database.deleteDoc(result.user.uid, 'Biometric').then(res => {
                this.interaction.presentToast('Autenticación Biométrica Desactivada');
              }).catch(err => {
                this.interaction.presentToast('Error al desactivar Autenticación Biométrica');
              });
            } else {
              this.interaction.presentToast('Autenticación Biométrica Desactivada');
            }
          }
          );
        }
        this.interaction.presentToast('Bienvenido ' + email);
        this.interaction.closeLoading();
        this.router.navigateByUrl('/pages/home');
      }
    } else {
      this.interaction.presentToast('Ingrese un correo y contraseña válidos');
    }
  }

  async authenticatebiometric() {
    const isAvailable = await NativeBiometric.isAvailable();
    if (isAvailable) {
      const result = await NativeBiometric.verifyIdentity({
        title: "Autenticación biométrica",
        subtitle: "Logearse con huella",
        description: "Por favor, coloque su huella digital",
      });
      this.database.getDoc<credentialsBiometric>(result.userId, 'Biometric').subscribe(res => {
        if (res) {
          this.auth.login(res.email, res.password).then(res => {
            this.interaction.presentToast('Bienvenido ' + res.user.email);
            this.router.navigateByUrl('/pages/home');
          }).catch(err => {
            this.interaction.presentToast('Error al iniciar sesión');
          });
        } else {
          this.interaction.presentToast('No se encontraron datos biométricos');
        }
      });
    } else {
      this.interaction.presentToast('No se encontró sensor biométrico');
    }
  }

}