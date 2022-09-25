import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InteractionService } from 'src/app/services/interaction.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public credentials: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private interaction: InteractionService) {
    this.credentials = this.fb.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]]
      }
    );
  }

  ngOnInit() { }

  async onSubmit(){
    this.interaction.openLoading('Iniciando sesión...');
    if(this.credentials.valid){
      const { email, password } = this.credentials.value as {email: string; password: string};
      const result = await this.auth.login(email,password).catch(err => console.log(err));
      this.interaction.presentToast('Usuario o Contraseña incorrectos');
      this.interaction.closeLoading();
      if(result){
        console.log('Login successful');
        this.interaction.presentToast('Bienvenido '+ email);
        this.interaction.closeLoading();
      }
    }
  }
}