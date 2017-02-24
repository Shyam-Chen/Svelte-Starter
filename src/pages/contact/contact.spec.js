import tpl from './contact.html';

describe('Contact', () => {
  it('toMatch', () => {
    expect(tpl).toMatch(/<%= CONTACT %>/);
    expect(tpl).not.toMatch(/<%= ABOUT %>/);
  });
});
