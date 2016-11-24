import layoutTpl from './layout.html';
import { tplOpts, tplOptsZh, layout, layoutZh } from './layout';

describe('Layout', () => {

  it('toMatch', () => {
    expect(layoutTpl).toMatch(/mdl-layout--fixed-header/);
    expect(layoutTpl).not.toMatch(/mdl-layout--fixed-drawer/);
  });

  it('toEqual', () => {
    expect(tplOpts).toEqual({
      'TITLE': 'Vanilla',
      'LINK': [['/en/home', 'Home'], ['/en/about', 'About']],
      'LANG': [['en', 'English'], ['zh', '中文']]
    });
  });

  it('toEqual', () => {
    expect(tplOptsZh).toEqual({
      'TITLE': '香草',
      'LINK': [['/zh/home', '首頁'], ['/zh/about', '關於']],
      'LANG': [['en', 'English'], ['zh', '中文']]
    });
  });

  it('toBeDefined', () => {
    expect(layout).toBeDefined();
  });

  it('toBeDefined', () => {
    expect(layoutZh).toBeDefined();
  });

});
