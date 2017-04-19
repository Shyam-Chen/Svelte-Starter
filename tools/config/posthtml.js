import { join } from 'path';

import bem from 'posthtml-bem';
import include from 'posthtml-include';
import mixins from 'posthtml-mixins';
import extend from 'posthtml-extend';
import expressions from 'posthtml-expressions';
import inlineAssets from 'posthtml-inline-assets';  // import url from 'posthtml-url';
import minifier from 'posthtml-minifier';

import { ASSETS_ROOT } from '../constants';

export default {
  plugins: [
    bem({ elemPrefix: '__', modPrefix: '--', modDlmtr: '-' }),
    include(),
    mixins(),
    extend(),
    expressions(),
    inlineAssets({ from: join(ASSETS_ROOT, 'images') }),  // url(),
    minifier({ collapseWhitespace: true, removeAttributeQuotes: true, removeComments: true })
  ],
  template: true
};
