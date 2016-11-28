import { query } from './query';

describe('Query', () => {

  it('should not throw an error', () => {
    expect(query).not.toThrow();
  });

  it('should be able to work properly', () => {
    expect(query('body')).toBe(document.querySelector('body'));
    expect(query('#foo')).toBe(document.querySelector('#foo'));
    expect(query('.foo')).toBe(document.querySelector('.foo'));
  });

});
