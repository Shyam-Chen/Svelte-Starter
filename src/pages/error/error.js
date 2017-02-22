// Third party
import { template } from 'lodash-es';

// Error
import tpl from './error.html';
import style from './error.css';

export const error = () => {
  page('*', () => {
    document.querySelector('#app').innerHTML = template(tpl, { 'imports': { style } })({ statusCode: '404' });
  });
};
