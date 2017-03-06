import tpl from './about.html';
import { about } from './about';

describe('About', () => {
  describe('Template', () => {
    it('Page title', () => {
      expect(tpl).toMatch(/<%= ABOUT %>/);
    });

    it('Table head', () => {
      expect(tpl).toMatch(/<%= LIST.TITLE %>/);
    });
  });

  it('action', () => {
    expect(about).toBeDefined();
  });
});
