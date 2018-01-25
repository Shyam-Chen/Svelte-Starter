import { $ } from './query';

describe('Query', () => {
  beforeEach(() => {
    Object.defineProperty(document, 'querySelector', {
      value() {
        return '<div class="foo"></div>';
      }
    });
  });

  it('$', () => {
    expect($('.foo')).toBe('<div class="foo"></div>');
  });
});
