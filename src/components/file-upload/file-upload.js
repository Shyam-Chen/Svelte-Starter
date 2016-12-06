import _template from 'lodash-es/template';

import template from './file-upload.html';
import style from './file-upload.css';

export const fileUploadCompiled  = _template(template, { 'imports': { style } });

export const fileUploadCtrl = (number) => {
  const input = document.querySelector(`[data-file-upload=${number}]`);
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
