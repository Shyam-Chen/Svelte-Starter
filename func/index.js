import functions from 'firebase-functions';
import admin from 'firebase-admin';
// import express from 'express';
// import cors from 'cors';

admin.initializeApp(functions.config().firebase);

const cors = require('cors')({ origin: true });

// const foo = express();
// const bar = express();

// foo.get('/', ...);
// bar.get('/', ...);

/**
 * @example POST /addText?text=${text}
 */
export const addText = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const { text } = req.query;

    admin.database()
      .ref('/messages')
      .push({ text })
      .then(() => {
        res.status(200).json({ message: 'Text saved.' });
      });
  });
});

// /foo
// export const foo = functions.https.onRequest(foo);

// /bar
// export const bar = functions.https.onRequest(bar);
