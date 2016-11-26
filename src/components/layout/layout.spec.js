import template from 'lodash-es/template';

import layoutTpl from './layout.html';
import { tplOptsEn, tplOptsZh, layoutEn, layoutZh } from './layout';

describe('Layout', () => {

  let tplOptsSpec, tplOptsZhSpec;
  beforeEach(() => {
    tplOptsSpec = {
      'TITLE': 'Vanilla',
      'LINK': [['/en/home', 'Home'], ['/en/about', 'About']],
      'LANG': [['en', 'English'], ['zh', '中文']]
    };

    tplOptsZhSpec = {
      'TITLE': '香草',
      'LINK': [['/zh/home', '首頁'], ['/zh/about', '關於']],
      'LANG': [['en', 'English'], ['zh', '中文']]
    };
  });

  it('toMatch', () => {
    expect(layoutTpl).toMatch(/mdl-layout--fixed-header/);
    expect(layoutTpl).not.toMatch(/mdl-layout--fixed-drawer/);
  });

  it('toEqual', () => {
    expect(tplOptsEn).toEqual(tplOptsSpec);
  });

  it('toEqual', () => {
    expect(tplOptsZh).toEqual(tplOptsZhSpec);
  });

  it('toBeDefined', () => {
    expect(layoutEn).toBeDefined();
  });

  it('toBe', () => {
    expect(layoutEn).toBe(template(layoutTpl)(tplOptsSpec));
  });

  it('toBeDefined', () => {
    expect(layoutZh).toBeDefined();
  });

  it('toBe', () => {
    expect(layoutZh).toBe(template(layoutTpl)(tplOptsZhSpec));
  });

  it('toMatch', () => {
    expect(layoutZh).toMatch(/首頁/);
  });

});
