import functions from 'firebase-functions';
import admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

/**
 * @example POST /addText?text=${text}
 */
export const addText = functions.https.onRequest((req, res) => {
  const { text } = req.query;

  admin.database()
    .ref('/messages')
    .push({ text })
    .then(() => {
      res.status(200).json({ message: 'Text saved.' });
    });
});
