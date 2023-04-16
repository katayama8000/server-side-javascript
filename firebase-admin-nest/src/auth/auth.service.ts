import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import * as admin from 'firebase-admin';

export class AuthService {
  public async verifyIdToken(idToken: string): Promise<DecodedIdToken> {
    console.log('verifyIdToken');
    try {
      console.log(idToken);
      const ret = await admin.auth().verifyIdToken(idToken, true);
      console.log(ret.uid, ret.email);
      return ret;
    } catch (e) {
      console.log(e);
      throw new Error('verifyIdToken error');
    }
  }
}
