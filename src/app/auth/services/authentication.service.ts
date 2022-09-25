import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth,getAuth,signInWithEmailAndPassword,UserCredential } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private auth?: Auth;
  private app: FirebaseApp;
  private user: BehaviorSubject<UserCredential | null> = new BehaviorSubject(null);

  constructor(private router: Router
    ) {
      this.app = initializeApp(environment.firebaseConfig);
      this.auth = getAuth(this.app);
      this.user.subscribe(console.log);
      console.log(this.auth.currentUser);
    }

    login(email: string,password: string){
      signInWithEmailAndPassword(this.auth,email,password)
        .then((user) => {
          this.user.next(user);
          this.router.navigate(['/inicio']);
        });
  
    }

}
