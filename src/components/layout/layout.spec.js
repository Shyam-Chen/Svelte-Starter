import { template as _ } from 'lodash';

import template from './layout.html';
import style from './layout.css';
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

  it('should works', () => {
    const dummyElement = document.createElement('div');
    document.querySelector = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

    const imports = { style };
    document.querySelector('#app').innerHTML = _(template, { imports })(data);
    document.querySelector('#content').innerHTML = `<p>Content</p>`;
  });
});
