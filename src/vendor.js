import 'page/page';
import 'material-design-lite/dist/material.indigo-pink.min.css';
import 'material-design-lite/material';
import 'firebase/firebase-auth';
import 'firebase/firebase-database';
import 'firebase/firebase-storage';
import 'firebase/firebase-messaging';

import { load } from './scripts';

Promise.all([
    load('https://fonts.googleapis.com/icon?family=Material+Icons')
  ])
  .then((result) => {
    const style = document.createElement('style');
    style.innerHTML = result[0];
    document.head.appendChild(style);
  });
