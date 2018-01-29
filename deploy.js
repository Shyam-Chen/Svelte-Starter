const { join } = require('path');
const client = require('firebase-tools');

client
  .deploy({
    project: process.env.FIREBASE_PROJECT,
    token: process.env.FIREBASE_TOKEN,
    cwd: join(__dirname, 'public')
  })
  .catch(err => console.error(err));
