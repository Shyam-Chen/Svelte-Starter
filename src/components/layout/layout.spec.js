// import _template from 'lodash-es/template';
// import _forEach from 'lodash-es/forEach';

import template from './layout.html';
// import style from './layout.css';
// import tplOptsEn from './langs/en.json';
// import tplOptsZh from './langs/zh.json';

// import { LAYOUT_EN, LAYOUT_ZH } from './layout';

describe('Layout', () => {

  // let tplOptsEnSpec, tplOptsZhSpec, imports;
  // beforeEach(() => {
  //   imports = { 'imports': { _forEach, style } };
  //   tplOptsEnSpec = {
  //     "TITLE": "Vanilla",
  //     "LINK": [["/en/home", "Home"], ["/en/about", "About"]],
  //     "LANG": [["en", "English"], ["zh", "中文"]]
  //   };

  //   tplOptsZhSpec = {
  //     "TITLE": "香草",
  //     "LINK": [["/zh/home", "首頁"], ["/zh/about", "關於"]],
  //     "LANG": [["en", "English"], ["zh", "中文"]]
  //   };
  // });

  describe('Template', () => {
    it('should be used `fixed-header`', () => {
      expect(template).toMatch(/mdl-layout--fixed-header/);
      expect(template).not.toMatch(/mdl-layout--fixed-drawer/);
    });

    it('should be a constant', () => {
      // expect(template).toMatch(/<%= TITLE %>/);
      // expect(template).toMatch(/<%- HREF %>/);
      // expect(template).toMatch(/<%- NAME %>/);
      // expect(template).toMatch(/<%- ID %>/);
    });
  });

  describe('Data', () => {
    it('should be the correct data - `layout-en`', () => {
      // expect(tplOptsEn).toEqual(tplOptsEnSpec);
    });

    it('should be the correct data - `layout-zh`', () => {
      // expect(tplOptsZh).toEqual(tplOptsZhSpec);
    });
  });

  it('should exist - `layout-en`', () => {
    // expect(LAYOUT_EN).toBeDefined();
  });

  it('should work properly - `layout-en`', () => {
    // expect(LAYOUT_EN).toBe(_template(template, imports)(tplOptsEnSpec));
  });

  it('should exist - `layout-zh`', () => {
    // expect(LAYOUT_ZH).toBeDefined();
  });

  it('should work properly - `layout-zh`', () => {
    // expect(LAYOUT_ZH).toBe(_template(template, imports)(tplOptsZhSpec));
  });

});
