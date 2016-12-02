import template from 'lodash-es/template';
import forEach from 'lodash-es/forEach';

import tpl from './layout.html';
import tplOptsEn from './langs/en.json';
import tplOptsZh from './langs/zh.json';

import { LAYOUT_EN, LAYOUT_ZH } from './layout';

describe('Layout', () => {

  let tplOptsEnSpec, tplOptsZhSpec, imports;
  beforeEach(() => {
    imports = { 'imports': { forEach } };
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
      expect(tpl).toMatch(/mdl-layout--fixed-header/);
      expect(tpl).not.toMatch(/mdl-layout--fixed-drawer/);
    });

    it('should be a constant', () => {
      // expect(tpl).toMatch(/<%= TITLE %>/);
      // expect(tpl).toMatch(/<%- HREF %>/);
      // expect(tpl).toMatch(/<%- NAME %>/);
      // expect(tpl).toMatch(/<%- ID %>/);
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
    expect(LAYOUT_EN).toBeDefined();
  });

  it('should work properly - `layout-en`', () => {
    expect(LAYOUT_EN).toBe(template(tpl, imports)(tplOptsEnSpec));
  });

  it('should exist - `layout-zh`', () => {
    expect(LAYOUT_ZH).toBeDefined();
  });

  it('should work properly - `layout-zh`', () => {
    expect(LAYOUT_ZH).toBe(template(tpl, imports)(tplOptsZhSpec));
  });

});
