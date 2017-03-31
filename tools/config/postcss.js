import comment from 'postcss-comment';
import pimport from 'postcss-import';
import cssnext from 'postcss-cssnext';
import rucksack from 'rucksack-css';
import url from 'postcss-url';
import cssnano from 'cssnano';

export default {
  parser: comment,
  plugins: [
    pimport(),
    cssnext({ warnForDuplicates: false }),
    rucksack({ autoprefixer: true }),
    url({ url: 'inline', maxSize: 32 }),
    cssnano()
  ]
};
