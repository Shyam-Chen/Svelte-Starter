import template from 'lodash-es/template';

import layoutTpl from './layout.html';
import tplOptsEn from './layout-en.json';
import tplOptsZh from './layout-zh.json';

import { layoutEn, layoutZh } from './layout';

describe('Layout', () => {

  let tplOptsEnSpec, tplOptsZhSpec;
  beforeEach(() => {
    tplOptsEnSpec = {
      "TITLE": "Vanilla",
      "LINK": [["/en/home", "Home"], ["/en/about", "About"]],
      "LANG": [["en", "English"], ["zh", "中文"]]
    };

    tplOptsZhSpec = {
      "TITLE": "香草",
      "LINK": [["/zh/home", "首頁"], ["/zh/about", "關於"]],
      "LANG": [["en", "English"], ["zh", "中文"]]
    };
  });

  describe('Template', () => {
    it('should be used `fixed-header`', () => {
      expect(layoutTpl).toMatch(/mdl-layout--fixed-header/);
      expect(layoutTpl).not.toMatch(/mdl-layout--fixed-drawer/);
    });

    it('should be a constant', () => {
      expect(layoutTpl).toMatch(/<%= TITLE %>/);
      expect(layoutTpl).toMatch(/<%- HREF %>/);
      expect(layoutTpl).toMatch(/<%- NAME %>/);
      expect(layoutTpl).toMatch(/<%- ID %>/);
    });
  });

  describe('Data', () => {
    it('should be the correct data - `layout-en`', () => {
      expect(tplOptsEn).toEqual(tplOptsEnSpec);
    });

    it('should be the correct data - `layout-zh`', () => {
      expect(tplOptsZh).toEqual(tplOptsZhSpec);
    });
  });

  it('should exist - `layout-en`', () => {
    expect(layoutEn).toBeDefined();
  });

  it('should work properly - `layout-en`', () => {
    expect(layoutEn).toBe(template(layoutTpl)(tplOptsEnSpec));
  });

  it('should exist - `layout-zh`', () => {
    expect(layoutZh).toBeDefined();
  });

  it('should work properly - `layout-zh`', () => {
    expect(layoutZh).toBe(template(layoutTpl)(tplOptsZhSpec));
  });

});
