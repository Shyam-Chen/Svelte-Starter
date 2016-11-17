import template from 'lodash-es/template';

import notFoundTpl from './404.html';
import notFoundStyle from './404.css';

import { query } from '../../components/utils';

export const notFoundOpts = {
  text: '404',
  style: {
    page: notFoundStyle.page,
    text: notFoundStyle.text
  }
};

export const load404 = () => {
  query('#app').innerHTML = template(notFoundTpl)(notFoundOpts);
};
