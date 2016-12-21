import './styles/global.css';

import { load } from './functions';
import firebaseConfig from './assets/datas/firebase.config.json';

import { HOME_EN, HOME_ZH } from './pages/home';
import { ABOUT_EN, ABOUT_ZH } from './pages/about';
import { CONTACT_EN, CONTACT_ZH } from './pages/contact';
import { ERROR } from './pages/error';

import { Observable } from '@reactivex/rxjs/dist/es6/Observable';
import '@reactivex/rxjs/dist/es6/add/observable/of';

Observable.of(1,2,3);

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

/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
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
              default:
            }
          };
        }
      };
    });
}
*/

/**
 * @deprecated
 */
switch (true) {
  case /zh/.test(navigator.language):
    page('/', HOME_ZH);
    break;
  default:
    page('/', HOME_EN);
}

page('/en/home', HOME_EN);
page('/en/about', ABOUT_EN);
page('/en/contact', CONTACT_EN);

page('/zh/home', HOME_ZH);
page('/zh/about', ABOUT_ZH);
page('/zh/contact', CONTACT_ZH);

page('*', ERROR);

page();
