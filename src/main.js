import { loadAbout } from './components/navigation/navigation.js';

import { loadHome } from './pages/home';
import { load404 } from './pages/404';

const config = {
  apiKey: 'AIzaSyDvaaNIb1KvegzUP2EtgxjxzcxG_T36wQI',
  authDomain: 'test-1498d.firebaseapp.com',
  databaseURL: 'https://test-1498d.firebaseio.com',
  storageBucket: 'test-1498d.appspot.com',
  messagingSenderId: '642330827186'
};
firebase.initializeApp(config);

page('/', loadHome);
page('/about', loadAbout);
page('*', load404);
page();
