import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authFirebase: AngularFireAuth) { }

  login(email: string, password: string) {

    return this.authFirebase.signInWithEmailAndPassword(email, password)

  }

  logout() {

    return this.authFirebase.signOut()

  }

  signup(email: string, password: string) {

    return this.authFirebase.createUserWithEmailAndPassword(email, password)

  }

}
