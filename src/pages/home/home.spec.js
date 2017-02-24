import tpl from './home.html';

describe('Home', () => {
  it('toMatch', () => {
    expect(tpl).toMatch(/<%= HOME %>/);
  });
});
