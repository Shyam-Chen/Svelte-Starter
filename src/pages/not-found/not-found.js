// @flow

import page from 'page';
import { template as _ } from 'lodash';

import { $ } from '~/utils';

import template from './not-found.html';
import style from './not-found.css';

export default (): void => {
  page('*', () => {
    $('#app').innerHTML = _(template, { imports: { style } })();
  });
};
