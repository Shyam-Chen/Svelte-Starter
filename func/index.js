import functions from 'firebase-functions';
import admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

/**
 * @example
 * https://us-central1-web-go-demo.cloudfunctions.net/addMessage?text=foo
 */
export const addMessage = functions
  .https
  .onRequest((req, res) => {
    const { text } = req.query;

    admin.database()
      .ref('/messages')
      .push({ text })
      .then(snapshot => {
        res.redirect(303, snapshot.ref);
      });
  });
