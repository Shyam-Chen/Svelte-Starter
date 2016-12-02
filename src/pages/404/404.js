import _template from 'lodash-es/template';

import template from './404.html';
import style from './404.css';

export const notfound = () => {
  document.querySelector('#app').innerHTML = _template(template, {
    'imports': { style }
  })({
    text: '404'
  });
};
