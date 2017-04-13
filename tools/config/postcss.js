import comment from 'postcss-comment';
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
import cssnano from 'cssnano';

export default {
  parser: comment,
  plugins: [
    pimport(),
    cssnext({ warnForDuplicates: false }),
    rucksack({ autoprefixer: true }),
    url({ url: 'inline' }),
    extend(),
    simplevars(),
    conditionals(),
    pfor(),
    each(),
    // pwhile(),
    definefunction(),
    cssnano()
  ]
};
