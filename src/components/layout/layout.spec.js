import layoutTpl from './layout.html';
// import { tplOpts, layout } from './layout';

describe('Layout', () => {

  it('toMatch', () => {
    expect(layoutTpl).toMatch(/mdl-layout--fixed-header/);
    expect(layoutTpl).not.toMatch(/mdl-layout--fixed-drawer/);
  });

  // it('toEqual', () => {
  //   expect(tplOpts).toEqual({
  //     'TITLE': 'Vanilla',
  //     'LINK_HREF': '/',
  //     'LINK_NAME': 'Home',
  //     'LINK_2': 'About'
  //   });
  // });

  // it('toBeTruthy' , () => {
  //   expect(layout).toBeTruthy();
  // });

});
