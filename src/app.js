import './themes/global.css';

import firebaseConfig from './assets/datas/firebase.config.json';

import { HOME_EN, HOME_ZH } from './pages/home';
import { ABOUT_EN, ABOUT_ZH } from './pages/about';

import { notfound } from './pages/404';

import { load } from './utils';

Promise.all([
    load('https://fonts.googleapis.com/icon?family=Material+Icons')
  ])
  .then((data) => {
    const style = document.createElement('style');
    style.innerHTML = data[0];
    document.head.appendChild(style);
  });

firebase.initializeApp(firebaseConfig);

/zh/.test(navigator.language) ? page('/', HOME_ZH) : page('/', HOME_EN);

page('/en/home', HOME_EN);
page('/en/about', ABOUT_EN);

page('/zh/home', HOME_ZH);
page('/zh/about', ABOUT_ZH);

page('*', notfound);
page();
