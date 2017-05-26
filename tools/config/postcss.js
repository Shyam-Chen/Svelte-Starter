import scss from 'postcss-scss';
import pimport from 'postcss-import';
import cssnext from 'postcss-cssnext';
import rucksack from 'rucksack-css';
import url from 'postcss-url';
import extend from 'postcss-extend';
import simplevars from 'postcss-simple-vars';
import conditionals from 'postcss-conditionals';
import pfor from 'postcss-for';
import each from 'postcss-each';
// import pwhile from 'postcss-while';
import definefunction from 'postcss-define-function';
import modules from 'postcss-modules';
import cssnano from 'cssnano';

import { ASSETS_ROOT } from '../constants';

const cssExportMap = {};

export default {
  parser: scss,
  plugins: [
    pimport(),
    cssnext({ warnForDuplicates: false }),
    rucksack({ autoprefixer: true }),
    url({ url: 'inline', maxSize: 32, basePath: ASSETS_ROOT }),
    extend(),
    simplevars(),
    conditionals(),
    pfor(),
    each(),
    // pwhile(),
    definefunction(),
    modules({
      getJSON(id, tokens) {
        cssExportMap[id] = tokens;
      }
    }),
    cssnano()
  ],
  getExport(id) {
    return cssExportMap[id];
  }
};
