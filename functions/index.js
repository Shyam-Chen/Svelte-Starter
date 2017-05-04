const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

/**
 * @example
 * https://us-central1-web-go-demo.cloudfunctions.net/addMessage?text=foo
 */
exports.addMessage = functions.https
  .onRequest(req => {
    const text = req.query.text;

    admin.database()
      .ref('/messages')
      .push({ text });
  });
