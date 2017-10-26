import { template as _ } from 'lodash';

import notfound from '../not-found';
import template from '../not-found.html';
import style from '../not-found.css';

describe('Not Found', () => {
  it('should be defined', () => {
    expect(notfound).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof notfound).toBe('function');
  });

  it('should be able to work', () => {
    const dummyElement = document.createElement('div');
    document.querySelector = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

    page('*', () => {
      document.querySelector('#app')
        .innerHTML = _(template, { imports: { style } })();
    });
  });
});
