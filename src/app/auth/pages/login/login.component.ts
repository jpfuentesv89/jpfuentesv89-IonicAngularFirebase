import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';
import { AuthenticationService } from '../../service/authentication.service';
import { AvailableResult, NativeBiometric } from "capacitor-native-biometric";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public credentials: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private interaction: InteractionService, private router: Router) {
    this.credentials = this.fb.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]]
      }
    );
  }

  ngOnInit() { }

  async onSubmit() {
    if (this.credentials.valid) {
      this.interaction.openLoading('Iniciando sesión...');
      const { email, password } = this.credentials.value as { email: string; password: string };
      const result = await this.auth.login(email, password).catch(err => console.log(err));
      this.interaction.presentToast('Usuario o Contraseña incorrectos');
      this.interaction.closeLoading();
      if (result) {
        console.log('inicio de sesión exitoso');
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
      const result2 = await this.auth.login('admin@admin.com', 'adminroot').catch(err => console.log(err));
      if (!result && result2) {
        console.log('inicio de sesión exitoso');
        this.interaction.presentToast('Bienvenido ' + 'Administrador');
        this.router.navigateByUrl('/pages/home');
      }else {
        this.interaction.presentToast('Autenticación Biométrica Desactivada');
      }
    } else {
      this.interaction.presentToast('Biometric no disponible');
    }
  }

}