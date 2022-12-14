import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private afs: AngularFirestore) { }
  //crear documento  
  createDoc(data: any, path: string, id: string) {
    const collection = this.afs.collection(path);
    return collection.doc(id).set(data);
  }
  //obtener documento
  getDoc<tipo>(path: string, id: string) {
    const collection = this.afs.collection<tipo>(path);
    return collection.doc(id).valueChanges();
  }
  //actualizar documento
  updateDoc(data: any, path: string, id: string) {
    const collection = this.afs.collection(path);
    return collection.doc(id).update(data);
  }
  //borrar documento
  deleteDoc(path: string, id: string) {
    const collection = this.afs.collection(path);
    return collection.doc(id).delete();
  }

  //listar documentos
  getdocs<tipo>(path: string) {
    const collection = this.afs.collection<tipo>(path);
    return collection.valueChanges();
  }

  //crear Id documento
  getId() {
    return this.afs.createId();
  }

  getVenta(uid: string) {
    const collection = this.afs.collection('ventas', ref => ref.where('uidComprador', '==', uid));
    return collection.valueChanges();
  }
  
}
