import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';
import { AuthenticationService } from '../../service/authentication.service';
import { NativeBiometric } from "capacitor-native-biometric";
import { FirestoreService } from 'src/app/services/firestore.service';
import { credentialsBiometric } from 'src/app/interfaces/models';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { exit } from 'process';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public credentials: FormGroup;

  qrimage: any;
  qrdata: any;

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private interaction: InteractionService, private database: FirestoreService, private router: Router, private barcodeScanner: BarcodeScanner) {
    this.credentials = this.fb.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]],
        check: [false]
      }
    );
  }

  ngOnInit() {
    if (localStorage.getItem('firstReload') == 'true') {
      localStorage.setItem('firstReload', 'false');
      window.location.reload();
    } else {
      localStorage.setItem('firstReload', 'true');
    }
  }

  async onSubmit() {
    if (this.auth.stateAuth()) {
      this.interaction.openLoading('Iniciando sesión...');
      if (this.credentials.valid) {
        const { email, password, check } = this.credentials.value as { email: string; password: string; check: boolean };
        const result = await this.auth.login(email, password).catch(err => console.log(err));
        this.interaction.presentToast('Usuario o Contraseña incorrectos');
        this.interaction.closeLoading();
        if (result) {
          console.log('inicio de sesión exitoso');
          if (check) {
            console.log('se activo el inicio de sesión biométrico');
            localStorage.setItem('uid', result.user.uid);
            this.database.createDoc({ email: email, password: password, check: check }, 'Biometric', result.user.uid).then(res => {
              this.interaction.presentToast('Inicio biométrico activado');
            }).catch(err => {
              this.interaction.presentToast('Error al activar inicio biométrico');
            });
          } else {
            console.log('no se activo el inicio de sesión biométrico');
            this.database.deleteDoc('Biometric', result.user.uid).then(res => {
              console.log(res);
              localStorage.removeItem('uid');
              this.interaction.presentToast('Autenticación Biométrica Desactivada');
            }).catch(err => {
              this.interaction.presentToast('Error al desactivar Autenticación Biométrica');
            });
          }
          this.interaction.closeLoading();
          this.credentials.reset();
          this.qrdata = null;
          localStorage.setItem('firstReload', 'true');
          this.router.navigateByUrl('/pages/home');
          this.interaction.presentToast('Bienvenido ' + result.user.email);
        }
      } else {
        this.interaction.presentToast('Ingrese un correo y contraseña válidos');
      }
    } else {
      this.interaction.presentToast('Ya se encuentra logeado');
    }
  }

  async authenticatebiometric() {
    if (this.auth.stateAuth()) {
      const isAvailable = await NativeBiometric.isAvailable();
      if (isAvailable) {
        const result = await NativeBiometric.verifyIdentity({
          title: "Autenticación biométrica",
          subtitle: "Logearse con huella",
          description: "Por favor, coloque su huella digital",
        });
        if (!result) {
          this.database.getDoc<credentialsBiometric>('Biometric', localStorage.getItem('uid')).subscribe(res => {
            if (res) {
              this.credentials.setValue({
                email: res.email,
                password: res.password,
                check: res.check
              });
              this.onSubmit();
            } else {
              this.interaction.presentToast('No se encontraron datos biométricos');
            }
          });
        } else {
          this.interaction.presentToast('Error al autenticar');
        }
      } else {
        this.interaction.presentToast('No se encontró sensor biométrico');
      }
    } else {
      this.interaction.presentToast('Ya se encuentra logeado');
    }
  }

  scanQR() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.qrdata = barcodeData.text;
      this.database.getDoc<credentialsBiometric>('Biometric', this.qrdata).subscribe(res => {
        if (res) {
          this.credentials.setValue({
            email: res.email,
            password: res.password,
            check: res.check
          });
          this.onSubmit();
        } else {
          this.interaction.presentToast('No se encontraron datos biométricos');
        }
      });
      console.log('Barcode data', this.qrdata);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  createQR() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, localStorage.getItem('uid')).then(
      encodedData => {
        this.qrimage = encodedData;
      },
      err => {
        console.log("Un error ha ocurrido: " + err);
      }
    );
  }

}