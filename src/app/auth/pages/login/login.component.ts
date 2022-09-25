import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public credentials: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthenticationService) {
    this.credentials = this.fb.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]]
      }
    );
  }

  ngOnInit() { }

  onSubmit(){
    if(this.credentials.valid){
      const { email, password } = this.credentials.value as {email: string; password: string};
        this.auth.login(email,password);
    }
  }
}