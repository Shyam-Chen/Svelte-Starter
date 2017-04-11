import bem from 'posthtml-bem';
import inlineAssets from 'posthtml-inline-assets';
import include from 'posthtml-include';
import mixins from 'posthtml-mixins';
import extend from 'posthtml-extend';
import expressions from 'posthtml-expressions';
import minifier from 'posthtml-minifier';

import { ASSETS_ROOT } from '../constants';

const { LINK } = require('../../src/components/layout/layout.json');
const { LIST } = require('../../src/pages/about/about.json');

export default {
  plugins: [
    bem({ elemPrefix: '__', modPrefix: '--', modDlmtr: '-' }),
    inlineAssets({ from: ASSETS_ROOT }),
    include(),
    mixins(),
    extend(),
    expressions({ locals: { LINK, LIST } }),
    minifier({ collapseWhitespace: true, removeAttributeQuotes: true, removeComments: true })
  ],
  template: true
};
