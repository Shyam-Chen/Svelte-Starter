// TODO: server-side rendering
const express = require('express');

const app = express();

app.engine('html', () => {
  // ...
});

app.set('view engine', 'html');
app.set('views', 'public')

app.use('/', express.static('public', { index: false }));

app.get('*', (req, res) => {
  res.render('../public/index.html', { req, res });
});

// exports.app = functions.https.onRequest(app);
