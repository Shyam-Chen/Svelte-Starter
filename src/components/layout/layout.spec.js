import layoutTpl from './layout.html';

describe('Layout', () => {

  it('toMatch', () => {
    expect(layoutTpl).toMatch(/mdl-layout--fixed-header/);
    expect(layoutTpl).not.toMatch(/mdl-layout--fixed-drawer/);
  });

});
