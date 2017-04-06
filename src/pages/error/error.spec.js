import { error } from './error';

import template from './error.html';

describe('Error', () => {
  it('toBeDefined', () => {
    expect(error).toBeDefined();
  });

  it('toBe', () => {
    expect(typeof error).toBe('function');
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
