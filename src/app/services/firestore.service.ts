import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }

  crearUsuario() {
    this.afs.collection('usuarios').add({
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 25
    });
  }

  getUsuarios(): Observable<any> {
    return this.afs.collection('usuarios').valueChanges();
  }

  getUsuario(id: string): Observable<any> {
    return this.afs.collection('usuarios').doc(id).valueChanges();
  }

  actualizarUsuario(id: string) {
    this.afs.collection('usuarios').doc(id).update({
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 25
    });
  }

  eliminarUsuario(id: string) {
    this.afs.collection('usuarios').doc(id).delete();
  }

}
