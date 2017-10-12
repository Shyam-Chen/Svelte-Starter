import { template as _ } from 'lodash';

import { layout } from '~/shared/layout';

import template from './about.html';
import style from './about.css';
import english from './_languages/english.json';
import chinese from './_languages/chinese.json';
import japanese from './_languages/japanese.json';

export default (): void => {
  const imports = { style };

  page('/about', () => layout(_(template, { imports })(english), 'about'));

  /**
   * @name internationalization
   */
  page('/en/about', () => layout(_(template, { imports })(english), 'about', 'en'));
  page('/zh/about', () => layout(_(template, { imports })(chinese), 'about', 'zh'));
  page('/ja/about', () => layout(_(template, { imports })(japanese), 'about', 'ja'));
};
