import './themes/global.css';

import firebaseConfig from './assets/datas/firebase.config.json';

import { loadHome, loadHomeZh } from './pages/home';
import { loadAbout } from './pages/about';
import { load404 } from './pages/404';

import { loadFont } from './components/utils';

firebase.initializeApp(firebaseConfig);

loadFont('https://fonts.googleapis.com/icon?family=Material+Icons');
loadFont('https://fonts.googleapis.com/css?family=Lora');

page('/', loadHome);
page('/zh', loadHomeZh);
page('/about', loadAbout);
page('*', load404);
page();
