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

const common = () => {
  const input = document.querySelector('#file-upload');
	let label	= input.nextElementSibling;
	let labelVal = label.innerHTML;
	input.addEventListener('change', (e) => {
		let fileName = '';
    fileName = e.target.value.split('\\').pop();
    if (fileName) {
			label.querySelector('span').innerHTML = fileName;
		} else {
			label.innerHTML = labelVal;
    }
	});

  componentHandler.upgradeAllRegistered();
};

export const CONTACT_EN = () => {
  site('en');

  document.querySelector('#app').innerHTML = LAYOUT_EN;
  document.querySelector('#zh').onclick = () => page.redirect('/zh/contact');

  document.querySelector('#page').innerHTML = _template(template, { 'imports': { style } })(LANGS_EN);

	common();
};

export const CONTACT_ZH = () => {
  site('zh');

  document.querySelector('#app').innerHTML = LAYOUT_ZH;
  document.querySelector('#en').onclick = () => page.redirect('/en/contact');

  document.querySelector('#page').innerHTML = _template(template, { 'imports': { style } })(LANGS_ZH);

  common();
};
