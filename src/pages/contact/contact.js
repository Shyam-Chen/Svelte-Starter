/*
 * TODO: Firebase
 *   1. Authentication
 *   2. Realtime Database
 *   3. Storage
 *   4. Notifications
 */

 // Third party
import _template from 'lodash-es/template';

// Components
import { LAYOUT_EN, LAYOUT_ZH } from '../../components/layout';

// Utils
import { site } from '../../utils';

// Main
import template from './contact.html';
import style from './contact.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

export const CONTACT_EN = () => {
  site('en', 'Vanilla - Contact', 'A single-page application boilerplate for Vanilla HTML/CSS/JS, Material, Firebase, Gulp, Rollup, PostCSS, and Babel.');
  document.querySelector('#app').innerHTML = LAYOUT_EN;
  document.querySelector('#zh').onclick = () => page.redirect('/zh/contact');
  document.querySelector('#page').innerHTML = _template(template, { 'imports': { style } })(LANGS_EN);
  componentHandler.upgradeAllRegistered();
};

export const CONTACT_ZH = () => {
  site('zh', 'Vanilla - 聯繫', 'Vanilla HTML/CSS/JS、Material、Firebase、Gulp、Rollup、PostCSS 和 Babel 的單頁應用程式底板。');
  document.querySelector('#app').innerHTML = LAYOUT_ZH;
  document.querySelector('#en').onclick = () => page.redirect('/en/contact');
  document.querySelector('#page').innerHTML = _template(template, { 'imports': { style } })(LANGS_ZH);
  componentHandler.upgradeAllRegistered();
};
