import { tplOptions } from './layout';

describe('Layout', () => {

  it('equal', () => {
    expect(tplOptions).toEqual({
      'TITLE': 'Vanilla',
      'LINK_1': 'Home',
      'LINK_2': 'About'
    });
  });

});
