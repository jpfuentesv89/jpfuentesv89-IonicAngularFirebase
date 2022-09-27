import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/admin/services/config.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  public signup: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private interaction: InteractionService, private router: Router, private config: ConfigService) {
    this.signup = this.fb.group({
      userName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      password2: [null, [Validators.required]]
    });
  }
  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.signup.valid) {
      const { userName, email, password, password2 } = this.signup.value as { userName: string; email: string; password: string; password2: string };
      if (password === password2) {
        this.interaction.openLoading('Registrando usuario...');
        const result = await this.auth.signup(email, password).catch(err => console.log(err));
        this.interaction.closeLoading();
        this.interaction.presentToast('Usuario existente');
        if (result) {
          console.log('Signup successful');
          this.config.agregarUser(result.user.uid, userName, result.user.email);
          this.interaction.closeLoading();
          this.interaction.presentToast('Usuario registrado correctamente');
          this.router.navigate(['/login']);
        }
      } else {
        this.interaction.presentToast('Contraseñas no coinciden');
      }
    } else {
      this.interaction.presentToast('Llene todos los campos');
    }
  }

}
