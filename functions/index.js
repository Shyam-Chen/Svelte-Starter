const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express');

admin.initializeApp(functions.config().firebase);

const app = express();

app.engine('html', () => {
  // TODO
});

app.set('view engine', 'html');
app.set('views', 'public')

app.use('/', express.static('public', { index: false }));

app.get('*', (req, res) => {
  res.render('../public/index.html', { req, res });
});

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

// TODO: prerender static content
exports.app = functions.https.onRequest(app);
