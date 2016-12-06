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
import { layout } from '../../components/layout';
import { fileUpload } from '../../components/file-upload';

// Main
import template from './contact.html';
import style from './contact.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

export const CONTACT_EN = () => {
  layout('en', 'contact');

  document.querySelector('#page').innerHTML = _template(template, { 'imports': { style } })(LANGS_EN);

  fileUpload('contact-image', 'Choose a file');

	componentHandler.upgradeAllRegistered();
};

export const CONTACT_ZH = () => {
  layout('zh', 'contact');

  document.querySelector('#page').innerHTML = _template(template, { 'imports': { style } })(LANGS_ZH);

  fileUpload('contact-image', '選擇一個檔案');

  componentHandler.upgradeAllRegistered();
};
