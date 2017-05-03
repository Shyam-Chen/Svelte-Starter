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

// exports.addWelcomeMessages = functions.auth
//   .user()
//   .onCreate(event => {
//     const user = event.data;
//     const fullName = user.displayName || 'Anonymous';
//
//     return admin.database()
//       .ref('messages')
//       .push({
//         name: 'Bot',
//         photoUrl: 'launcher-icon-3x.png',
//         text: `${fullName} signed in for the first time! Welcome!`
//       });
//   });
