import './app.css';

import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs/observable';

import pages from '~/pages';
import { load$ } from '~/utils';

/**
 * @name load-fonts
 */
Observable::forkJoin(
    load$('https://fonts.googleapis.com/css?family=Indie+Flower'),
    load$('https://fonts.googleapis.com/icon?family=Material+Icons')
  )
  .subscribe(result => {
    const style = document.createElement('style');

    for (let i = 0; i < result.length; i++) {
      style.innerHTML += result[i];
    }

    document.head.appendChild(style);
  });

/**
 * @name firebase-config
 */
firebase.initializeApp({
  apiKey: 'AIzaSyDBA0yVS0JuIqGaoN9nafvPFxPSVgmxwnw',
  authDomain: 'web-go-demo.firebaseapp.com',
  databaseURL: 'https://web-go-demo.firebaseio.com',
  projectId: 'web-go-demo',
  storageBucket: 'web-go-demo.appspot.com',
  messagingSenderId: '584431831746'
});

/**
 * @name service-worker
 */
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

/**
 * @name bootstrap-app
 */
pages();

/**
 * @name prod-env
 */
if (process.env.NODE_ENV === 'production') {
  /**
   * @name pre-render
   * @param {string} path - route name
   * @returns {HTMLElement} - rendered html
   */
  window.prerender = (path: string): HTMLElement => {
    history.push(path);
    return document.documentElement.outerHTML;
  };

  /**
   * @name error-tracking
   */
  Raven.config('https://5f5c195e793f4195ab580790f04d074e@sentry.io/233631')
    .install();
}
