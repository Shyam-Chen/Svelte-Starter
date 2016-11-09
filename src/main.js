import { loadAbout } from './components/navigation/navigation.js';

import { loadHome } from './pages/home';
import { load404 } from './pages/404';



  const config = {
    apiKey: process.env.API_KEY || 'AIzaSyDvaaNIb1KvegzUP2EtgxjxzcxG_T36wQI',
    authDomain: process.env.AUTH_DOMAIN || 'test-1498d.firebaseapp.com',
    databaseURL: process.env.DATABASE_URL || 'https://test-1498d.firebaseio.com',
    storageBucket: process.env.STORAGE_BUCKET || 'test-1498d.appspot.com',
    messagingSenderId: process.env.MESSAGING_SENDER_ID || '642330827186'
  };
  firebase.initializeApp(config);


const rootRef = firebase.database().ref();

console.log(rootRef);

page('/', loadHome);
page('/about', loadAbout);
page('*', load404);
page();
