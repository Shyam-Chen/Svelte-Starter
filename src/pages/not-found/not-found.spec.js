import page from 'page';
import { template as _ } from 'lodash';

import notfound from './not-found';
import template from './not-found.html';
import style from './not-found.css';

describe('Not Found', () => {
  it('should be defined', () => {
    expect(notfound).toBeDefined();
  });

  it('should be able to work', () => {
    Object.defineProperty(document, 'querySelector', {
      value() {
        return '<div id="app"></div>';
      }
    });

    page('*', () => {
      document.querySelector('#app')
        .innerHTML = _(template, { imports: { style } })();
    });
  });
});
