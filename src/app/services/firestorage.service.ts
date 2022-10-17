import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(private storage: AngularFireStorage) { }

  uploadImage(image: string, path: string, name: string) {
    return this.storage.upload(`${path}/${name}`, image).then(snapshot => snapshot.ref.getDownloadURL());
  }

  deleteImage(path: string, name: string) {
    return this.storage.ref(`${path}/${name}`).delete();
  }
}