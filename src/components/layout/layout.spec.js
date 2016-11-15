import layout from './layout.html';
import { options, layoutTpl } from './layout';

describe('Layout', () => {

  it('toMatch', () => {
    expect(layout).toMatch(/mdl-layout--fixed-header/);
    expect(layout).not.toMatch(/mdl-layout--fixed-drawer/);
  });

  it('toEqual', () => {
    expect(options).toEqual({
      'TITLE': 'Vanilla',
      'LINK_1': 'Home',
      'LINK_2': 'About'
    });
  });

  it('toBeTruthy' , () => {
    expect(layoutTpl).toBeTruthy();
  })

});
