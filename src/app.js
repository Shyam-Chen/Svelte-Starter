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
        if (navigator.serviceWorker.controller) {
          const { installing } = registration;

          installing.onstatechange = () => {
            switch (installing.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  const { update } = registration;

                  console.log('New or updated content is available.');
                  update();
                } else {
                  console.log('Content is now available offline!');
                }
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
