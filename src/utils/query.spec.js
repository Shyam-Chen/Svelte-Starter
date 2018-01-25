import { $, $$ } from './query';

describe('Query', () => {
  it('$', () => {
    Object.defineProperty(document, 'querySelector', {
      value() {
        return '<div class="foo"></div>';
      }
    });

    expect($('.foo')).toEqual('<div class="foo"></div>');
  });

  it('$$', () => {
    Object.defineProperty(document, 'querySelectorAll', {
      value() {
        return [
          '<div class="foo"></div>',
          '<div class="foo"></div>'
        ];
      }
    });

    expect($$('.foo')).toEqual([
      '<div class="foo"></div>',
      '<div class="foo"></div>'
    ]);
  });
});
