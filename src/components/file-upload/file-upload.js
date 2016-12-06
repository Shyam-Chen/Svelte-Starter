import _template from 'lodash-es/template';

import template from './file-upload.html';
import style from './file-upload.css';

const view = _template(template, { 'imports': { style } });

const controller = (name) => {
  const input = document.querySelector(`input[data-file-upload=${name}]`);
	let label	= input.nextElementSibling;
	let labelVal = label.innerHTML;
	input.addEventListener('change', (event) => {
		let fileName = '';
    fileName = event.target.value.split('\\').pop();
    if (fileName) {
			label.querySelector('span').innerHTML = fileName;
		} else {
			label.innerHTML = labelVal;
    }
	});
};

/**
 * @param {string} name
 * @param {string} text
 *
 * @example
 * // js
 * import { fileUpload } from '../../components/file-upload';
 * fileUpload('file-upload', 'Choose a file');
 *
 * // html
 * <div id="file-upload"></div>
 */
export const fileUpload = (name, text) => {
  document.querySelector(`#${name}`).innerHTML = view({ name, text });
  controller(name);
};
