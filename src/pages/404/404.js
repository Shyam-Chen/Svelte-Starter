import template from 'lodash-es/template';

import { query } from '../../utils';

import notFoundTpl from './404.html';
import notFoundStyl from './404.css';

export const load404 = () => {
  query('#app').innerHTML = template(notFoundTpl, {
    'imports': { 'style': notFoundStyl }
  })({
    text: '404'
  });
};
