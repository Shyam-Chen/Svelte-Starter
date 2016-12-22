import { Observable } from '@reactivex/rxjs/dist/es6/Observable';
import '@reactivex/rxjs/dist/es6/add/observable/of';

import './app-routing';
import './styles/global.css';

import { load } from './functions';
import firebaseConfig from './assets/datas/firebase.config.json';

/**
 * @name Initialization
 */
Promise.all([
    load('https://fonts.googleapis.com/icon?family=Material+Icons')
  ])
  .then((data) => {
    const style = document.createElement('style');
    style.innerHTML = data[0];
    document.head.appendChild(style);
  });

firebase.initializeApp(firebaseConfig);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then((registration) => {
      registration.onupdatefound = () => {
        if (navigator.serviceWorker.controller) {
          let installingWorker = registration.installing;

          installingWorker.onstatechange = () => {
            switch (installingWorker.state) {
              case 'installed':
                // ...
                break;
              case 'redundant':
                throw new Error('...');
            }
          };
        }
      };
    });
}

Observable.of(1,2,3);
