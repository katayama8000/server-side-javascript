import { getAuth, UserRecord } from 'firebase-admin/auth';

/**
 * ユーザーを作成する
 * @returns ユーザー情報
 */

export const authUser = async (): Promise<void | UserRecord> => {
  try {
    const user = getAuth()
      .createUser({
        email: 'authUser@example.com',
        emailVerified: false,
        phoneNumber: '+11234567890',
        password: 'secretPassword',
        displayName: 'John Doe',
        photoURL: 'http://www.example.com/12345678/photo.png',
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
    return user;
  } catch (e) {
    console.log(e);
    throw new Error('authUser error');
  }
};
