import './app.css';

import { home } from './pages/home';
import { about } from './pages/about';
import { contact } from './pages/contact';
import { error } from './pages/error';

firebase.initializeApp({
  apiKey: 'AIzaSyABgvqPE5cNRsTS0UfXpWdyYvqxvR5lGYs',
  authDomain: 'frontend-starter-kit.firebaseapp.com',
  databaseURL: 'https://frontend-starter-kit.firebaseio.com',
  storageBucket: 'frontend-starter-kit.appspot.com',
  messagingSenderId: '428173442531'
});

if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then(registration => {
      registration.onupdatefound = () => {
        const controllerConditional = navigator.serviceWorker.controller;

        if (controllerConditional) {
          const { installing } = registration;

          installing.onstatechange = () => {
            const contentOffline = () => console.log('Content is now available offline!');

            switch (installing.state) {
              case 'installed':
                controllerConditional ? registration.update() : contentOffline();
                break;
              case 'activated':
                controllerConditional ? location.reload() : contentOffline();
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
error();
page();
