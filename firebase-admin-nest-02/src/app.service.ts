import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { firestore } from 'firebase-admin';

@Injectable()
export class AppService {
  private readonly DB: firestore.Firestore;
  constructor() {
    this.DB = admin.firestore();
  }

  async getDoc() {
    try {
      const cityRef = this.DB.collection('LA').doc('nqyfefEia1hHLAKuswrU');
      const citySnapshot = await cityRef.get();
      console.log(citySnapshot);
      console.log(citySnapshot.ref.parent.path);
      citySnapshot.data();
      return citySnapshot.data();
    } catch (e) {
      console.log(e);
    }
  }

  getHello() {
    return 'Hello World!';
  }
}
