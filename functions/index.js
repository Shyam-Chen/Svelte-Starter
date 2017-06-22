const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

/**
 * @example
 * https://us-central1-web-go-demo.cloudfunctions.net/addMessage?text=foo
 */
exports.addMessage = functions.https
  .onRequest((req, res) => {
    const text = req.query.text;

    admin.database()
      .ref('/messages')
      .push({ text })
      .then(snapshot => {
        res.redirect(303, snapshot.ref);
      });
  });

exports.makeUppercase = functions.database
  .ref('/users')
  .onWrite(event => {
    const original = event.data.val();
    const uppercase = original.toUpperCase();

    return event.data.ref.parent.child('uppercase').set(uppercase);
  });

exports.prerenderAboutPage = functions.https
  .onRequest((req, res) => {
    res.status(200).send();
  });

exports.prerenderContactPage = functions.https
  .onRequest((req, res) => {
    res.status(200).send();
  });
