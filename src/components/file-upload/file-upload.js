import _template from 'lodash-es/template';

import template from './file-upload.html';
import style from './file-upload.css';

const fileUploadView = _template(template, { 'imports': { style } });

const fileUploadCtrl = (name) => {
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

export const fileUpload = (name, text) => {
  document.querySelector(`#${name}`).innerHTML = fileUploadView({ name, text });
  fileUploadCtrl(name);
};

/**
 * @example
 * // js
 * import { fileUpload } from '../../components/file-upload';
 * fileUpload('fu', 'Choose a file');
 *
 * // html
 * <div id="fu"></div>
 */
