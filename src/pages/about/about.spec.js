import aboutTpl from './about.html';

describe('About', () => {

  it('toMatch', () => {
    expect(aboutTpl).toMatch(/<%= ABOUT %>/);
    expect(aboutTpl).not.toMatch(/<%= HOME %>/);
  });

});
