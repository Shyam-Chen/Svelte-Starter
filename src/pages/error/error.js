// Third party
import luyou from 'luyou';
import { template } from 'lodash-es';

// Error
import tpl from './error.html';
import style from './error.css';

export const error = () => {
  luyou('*', () => {
    document.querySelector('#app').innerHTML = template(tpl, { 'imports': { style } })({ statusCode: '404' });
  });
};
