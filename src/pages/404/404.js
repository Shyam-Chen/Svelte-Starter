import template from 'lodash-es/template';

import tpl from './404.html';
import styl from './404.css';

export const notfound = () => {
  document.querySelector('#app').innerHTML = template(tpl, {
    'imports': { 'style': styl }
  })({
    text: '404'
  });
};
