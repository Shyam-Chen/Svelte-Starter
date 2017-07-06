import './app.css';

// import { Observable } from 'rxjs';
// import { forkJoin } from 'rxjs/observable';

// import { load } from './utils';

import { home } from './pages/home';
import { about } from './pages/about';
import { contact } from './pages/contact';
import { admin } from './pages/admin';
import { notfound } from './pages/not-found';

// Observable::forkJoin(
//     load('https://fonts.googleapis.com/css?family=Indie+Flower'),
//     load('https://fonts.googleapis.com/icon?family=Material+Icons'),
//   )
//   .subscribe(result => {
//     const style = document.createElement('style');
//     style.innerHTML = result;
//     document.head.appendChild(style);
//   });

firebase.initializeApp({
  apiKey: 'AIzaSyDBA0yVS0JuIqGaoN9nafvPFxPSVgmxwnw',
  authDomain: 'web-go-demo.firebaseapp.com',
  databaseURL: 'https://web-go-demo.firebaseio.com',
  projectId: 'web-go-demo',
  storageBucket: 'web-go-demo.appspot.com',
  messagingSenderId: '584431831746'
});

if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then(registration => {
      registration.onupdatefound = () => {
        if (navigator.serviceWorker.controller) {
          const { installing } = registration;

          installing.onstatechange = () => {
            switch (installing.state) {
              case 'installed':
                registration.update();
                break;
              case 'activated':
                location.reload();
                break;
              case 'redundant':
                throw new Error('The installing service worker became redundant.');
            }
          };
        }
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

home();
about();
contact();
admin();
notfound();
page();
