import './app.css';

import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs/observable';

import pages from '~/pages';
import { load$ } from '~/utils';

/**
 * @name initialize-app
 */

// fonts or icons
Observable
  ::forkJoin(
    load$('https://fonts.googleapis.com/icon?family=Material+Icons')
  )
  .subscribe(result => {
    const style = document.createElement('style');

    [].forEach.call(
      result,
      (item, index) => style.innerHTML += result[index]
    );

    document.head.appendChild(style);
  });

// firebase config
firebase.initializeApp(process.env.FIREBASE_CONFIG);

// service worker
if (
  'serviceWorker' in navigator &&
  (window.location.protocol === 'https:' || window.location.hostname === 'localhost')
) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then(registration => {
      registration.onupdatefound = () => {
        if (navigator.serviceWorker.controller) {
          const { installing } = registration;

          installing.onstatechange = () => {
            /* eslint-disable indent */
            switch (installing.state) {
              case 'installed':
                registration.update();
                break;
              case 'activated':
                location.reload();
                break;
              case 'redundant':
                throw new Error('The installing service worker became redundant.');
              default:
                console.log('Service Worker');
            }
            /* eslint-enable indent */
          };
        }
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

/**
 * @name bootstrap-app
 */
if (process.env.NODE_ENV === 'production') {
  Raven.config(process.env.SENTRY_URL).install();
  Raven.context(() => pages());
} else {
  pages();
}
