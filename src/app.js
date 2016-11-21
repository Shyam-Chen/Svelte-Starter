import './themes/global.css';

import firebaseConfig from './assets/datas/firebase.config.json';

import { loadHome, loadHomeZh } from './pages/home';
import { loadAbout, loadAboutZh } from './pages/about';
import { load404 } from './pages/404';

import { loadFont } from './components/utils';

firebase.initializeApp(firebaseConfig);

loadFont('https://fonts.googleapis.com/icon?family=Material+Icons');
loadFont('https://fonts.googleapis.com/css?family=Lora');

/zh/.test(navigator.language) ? page('/', loadHomeZh) : page('/', loadHome);

page('/en/home', loadHome);
page('/zh/home', loadHomeZh);
page('/en/about', loadAbout);
page('/zh/about', loadAboutZh);
page('*', load404);
page();
