import './styles/global.css';

import { load } from './scripts';
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

/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then((registration) => {
      registration.onupdatefound = () => {
        if (navigator.serviceWorker.controller) {
          let installingWorker = registration.installing;

          installingWorker.onstatechange = () => {
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  console.log('New or updated content is available.');
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
    });
}*/

import { HOME_EN, HOME_ZH } from './pages/home';
import { ABOUT_EN, ABOUT_ZH } from './pages/about';
import { CONTACT_EN, CONTACT_ZH } from './pages/contact';
import { ERROR } from './pages/error';

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
