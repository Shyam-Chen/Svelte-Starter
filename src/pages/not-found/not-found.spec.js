import { notfound } from './not-found';

import template from './not-found.html';

describe('Error', () => {
  it('toBeDefined', () => {
    expect(notfound).toBeDefined();
  });

  it('toBe', () => {
    expect(typeof notfound).toBe('function');
  });

  it('test', () => {
    const dummyElement = document.createElement('div');
    document.querySelector = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

    page('*', () => {
      document.querySelector('#app')
        .innerHTML = template({ statusCode: '404' });
    });
  });
});
