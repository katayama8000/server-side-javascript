import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import * as admin from 'firebase-admin';

export class AuthService {
  public async verifyIdToken(idToken: string): Promise<DecodedIdToken> {
    console.log('verifyIdToken');
    return await admin.auth().verifyIdToken(idToken, true);
  }
}
