import { Injectable } from '@nestjs/common';
import { getAuth, UserRecord } from 'firebase-admin/auth';

@Injectable()
export class Auth01Service {
  createUser(email: string, password: string) {
    getAuth()
      .createUser({
        email: email,
        emailVerified: false,
        password: password,
        disabled: false,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully created new user:', userRecord.uid);
        return userRecord;
      })
      .catch((error) => {
        console.log('Error creating new user:', error);
      });
  }
  getUser(email: string) {
    const user = getAuth()
      .getUserByEmail(email)
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully fetched user data:', userRecord.toJSON());
        return userRecord;
      })
      .catch((error) => {
        console.log('Error fetching user data:', error);
      });
    return user;
  }

  setCustomUserClaims(uid: string) {
    getAuth()
      .setCustomUserClaims(uid, { admin: true })
      .then((user) => {
        // The new custom claims will propagate to the user's ID token the
        // next time a new one is issued.
        console.log(user);
      });
  }

  verifyIdToken(idToken: string) {
    getAuth()
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        console.log({ uid });
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Handle error
      });
  }
}
