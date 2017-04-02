import bem from 'posthtml-bem';
import inlineAssets from 'posthtml-inline-assets';
import include from 'posthtml-include';
import mixins from 'posthtml-mixins';
import extend from 'posthtml-extend';
import expressions from 'posthtml-expressions';
import minifier from 'posthtml-minifier';

import { ASSETS_ROOT } from '../constants';

export default {
  plugins: [
    bem({ elemPrefix: '__', modPrefix: '--', modDlmtr: '-' }),
    inlineAssets({ from: ASSETS_ROOT }),
    include(),
    mixins(),
    extend(),
    expressions(),
    minifier({ collapseWhitespace: true, removeAttributeQuotes: true, removeComments: true })
  ],
  template: true
};
