import layoutTpl from './layout.html';
import { tplOptions, layout } from './layout';

describe('Layout', () => {

  it('toMatch', () => {
    expect(layoutTpl).toMatch(/mdl-layout--fixed-header/);
    expect(layoutTpl).not.toMatch(/mdl-layout--fixed-drawer/);
  });

  it('toEqual', () => {
    expect(tplOptions).toEqual({
      'TITLE': 'Vanilla',
      'LINK_1': 'Home',
      'LINK_2': 'About'
    });
  });

  it('toBeTruthy' , () => {
    expect(layout).toBeTruthy();
  })

});
