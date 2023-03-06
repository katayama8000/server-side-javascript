import { getAuth, UserRecord } from 'firebase-admin/auth';

export const authUser = async (): Promise<void | UserRecord> => {
  const user = getAuth()
    .createUser({
      email: 'authUser2@example.com',
      emailVerified: false,
      //   phoneNumber: '+11234567890',
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
};
