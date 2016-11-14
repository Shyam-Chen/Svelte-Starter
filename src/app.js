import './app.css';

import { loadHome } from './pages/home';
import { loadAbout } from './pages/about';
import { load404 } from './pages/404';

import firebaseConfig from './assets/datas/firebase.config.json';
firebase.initializeApp(firebaseConfig);
const rootRef = firebase.database().ref();
const path = rootRef.root.toString();
console.log(path);

import { loadFont } from './components/utils';
loadFont('https://fonts.googleapis.com/css?family=Lora:700i');

page('/', loadHome);
page('/about', loadAbout);
page('*', load404);
page();
