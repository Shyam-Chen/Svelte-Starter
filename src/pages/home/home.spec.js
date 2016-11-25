import homeTpl from './home.html';

describe('Home', () => {

  it('toMatch', () => {
    expect(homeTpl).toMatch(/<%= HOME %>/);
    expect(homeTpl).not.toMatch(/<%= ABOUT %>/);
  });

});
