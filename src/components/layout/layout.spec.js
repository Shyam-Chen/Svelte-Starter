import template from './layout.html';
import data from './layout.json';
import { layout } from './layout';

describe('Layout', () => {
  describe('Template', () => {
    it('should be used `fixed-header`', () => {
      expect(template).toMatch(/mdl-layout--fixed-header/);
      expect(template).not.toMatch(/mdl-layout--fixed-drawer/);
    });
  });

  describe('Data', () => {
    it('toMatch', () => {
      expect(JSON.stringify(data)).toMatch(/TITLE/);
      expect(JSON.stringify(data)).toMatch(/LINK/);
    });
  });

  it('toBeDefined', () => {
    expect(layout).toBeDefined();
  });
});
