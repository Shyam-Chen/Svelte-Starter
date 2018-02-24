import '~/assets/styles/global.css';

import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs/observable';
import Raven from 'raven-js';

import pages from '~/pages';
import { load$ } from '~/utils';

/**
 * @name initialize-app
 */

// fonts or icons or themes
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

    style.innerHTML += `
      :root {
        --mdc-theme-primary: #3F51B5;
        --mdc-theme-secondary: #E91E63;
      }
    `;

    document.head.appendChild(style);
  });

// firebase config
firebase.initializeApp(process.env.FIREBASE_CONFIG);

// service worker
if (
  'serviceWorker' in navigator &&
  (location.protocol === 'https:' || location.hostname === 'localhost')
) {
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
              default:
                console.log('Service Worker');
            }
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
