import './themes/global.css';

import firebaseConfig from './assets/datas/firebase.config.json';

import { HOME_EN, HOME_ZH } from './pages/home';
import { ABOUT_EN, ABOUT_ZH } from './pages/about';

import { notfound } from './pages/404';

firebase.initializeApp(firebaseConfig);

// Intl.getCanonicalLocales(['en', 'zh']);

/zh/.test(navigator.language) ? page('/', HOME_ZH) : page('/', HOME_EN);

page('/en/home', HOME_EN);
page('/en/about', ABOUT_EN);

page('/zh/home', HOME_ZH);
page('/zh/about', ABOUT_ZH);

page('*', notfound);
page();
