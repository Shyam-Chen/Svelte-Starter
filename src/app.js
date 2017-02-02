import luyou from 'luyou';

import './styles/global.css';

import { home } from './pages/home';
import { about } from './pages/about';
import { contact } from './pages/contact';
import { error } from './pages/error';

import firebaseConfig from './assets/datas/firebase.config.json';

firebase.initializeApp(firebaseConfig);

if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
  navigator.serviceWorker
    .register('service-worker.js')
    .then((registration) => {
      registration.onupdatefound = () => {
        if (navigator.serviceWorker.controller) {
          let { installing } = registration;

          installing.onstatechange = () => {
            switch (installing.state) {
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
}

home();
about();
contact();
error();
luyou();
