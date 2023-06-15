import { Injectable } from '@nestjs/common';
import { firestore } from 'firebase-admin';
import * as admin from 'firebase-admin';

@Injectable()
export class CityService {
  private readonly DB: firestore.Firestore;
  constructor() {
    this.DB = admin.firestore();
  }
  async getDoc() {
    const cityRef = this.DB.collection('cities').doc('LA');
    const citySnapshot = await cityRef.get();
    console.log(citySnapshot.ref.parent.path);
    citySnapshot.data();
  }

  async getCollection() {
    const citiesRef = this.DB.collection('cities');
    const citiesSnapshot = await citiesRef.get();
    const snapshot = citiesSnapshot.docs.map((doc) => doc.data());
    console.log(snapshot);
    const countries = snapshot.map((city) => city.country);
    console.log(countries);
  }

  async getQuery() {
    // queryとcollectionの違いは、queryは条件を指定して取得することができる
    const query = this.DB.collection('cities').where('capital', '==', true);
    const querySnapshot = await query.get();
    const snapshot = querySnapshot.docs.map((doc) => doc.data());
    console.log(snapshot);
  }
}
