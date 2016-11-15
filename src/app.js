import './app.css';

import { loadHome } from './pages/home';
import { loadAbout } from './pages/about';
import { load404 } from './pages/404';

/*
 * Lodash example:
 */
// import all
// import { defaults, partition, add, sum } from 'lodash-es';

// import a single
import defaults from 'lodash-es/defaults';
import partition from 'lodash-es/partition';
import add from 'lodash-es/add';
import sum from 'lodash-es/sum';
console.log(defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
console.log(partition([1, 2, 3, 4], n => n % 2));
console.log(add(6, 4)::sum([3, 2]));

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
