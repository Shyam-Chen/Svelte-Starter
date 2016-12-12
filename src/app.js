import './styles/global.css';

import { load } from './utils';
import firebaseConfig from './assets/datas/firebase.config.json';

import { HOME_EN, HOME_ZH } from './pages/home';
import { ABOUT_EN, ABOUT_ZH } from './pages/about';
import { CONTACT_EN, CONTACT_ZH } from './pages/contact';
import { notfound } from './pages/404';

/**
 * @name Material
 */
Promise.all([
    load('https://fonts.googleapis.com/icon?family=Material+Icons')
  ])
  .then((data) => {
    const style = document.createElement('style');
    style.innerHTML = data[0];
    document.head.appendChild(style);
  });

/**
 * @name Firebase
 */
firebase.initializeApp(firebaseConfig);

/**
 * @name Page
 */
switch (true) {
  case /zh/.test(navigator.language):
    page('/', HOME_ZH);
    break;
  default:
    page('/', HOME_EN);
}

// page('/:lang/home', HOME);
// page('/:lang/about', ABOUT);

page('/en/home', HOME_EN);
page('/en/about', ABOUT_EN);
page('/en/contact', CONTACT_EN);

page('/zh/home', HOME_ZH);
page('/zh/about', ABOUT_ZH);
page('/zh/contact', CONTACT_ZH);

page('*', notfound);

page();
