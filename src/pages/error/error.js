import _template from 'lodash-es/template';

import template from './error.html';
import style from './error.css';

export const ERROR = () => {
  document.querySelector('#app').innerHTML = _template(template, {
    'imports': { style }
  })({
    text: '404'
  });
};
