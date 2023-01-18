
const { initializeApp } = require('firebase-admin/app');
const admin = require('firebase-admin');
const { getAuth } = require('firebase-admin/auth');
initializeApp({
    credential: admin.credential.applicationDefault(),
    // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

const listAllUsers = (nextPageToken) => {
    // List batch of users, 1000 at a time.
    getAuth()
        .listUsers(1000, nextPageToken)
        .then((listUsersResult) => {
            listUsersResult.users.forEach((userRecord) => {
                console.log('user', userRecord.toJSON());
            });
            if (listUsersResult.pageToken) {
                // List next batch of users.
                listAllUsers(listUsersResult.pageToken);
            }
        })
        .catch((error) => {
            console.log('Error listing users:', error);
        });
};
// Start listing users from the beginning, 1000 at a time.
listAllUsers();

console.log('Hello World')