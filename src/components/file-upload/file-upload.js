import _template from 'lodash-es/template';

import template from './file-upload.html';
import style from './file-upload.css';

const compiled = _template(template, { 'imports': { style } });

const action = (name) => {
  const input = document.querySelector(`input[type=file]#_${name}`);
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
 * @param {string} [text=Choose a file]
 *
 * @example
 * // js
 * import { fileUpload } from '../../components/file-upload';
 * fileUpload('example-1');
 * fileUpload('example-2', 'Choose a file');
 *
 * // html
 * <div id="example-1"></div>
 * <div id="example-2"></div>
 */
export const fileUpload = (name, text = 'Choose a file') => {
  document.querySelector(`#${name}`).innerHTML = compiled({ name, text });
  action(name);
};
