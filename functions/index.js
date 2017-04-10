const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.addMessage = functions.https
  .onRequest((req, res) => {
    const original = req.query.text;

    admin.database()
      .ref('/messages')
      .push({ original })
      .then(snapshot => {
        res.redirect(303, snapshot.ref);
      });
  });
