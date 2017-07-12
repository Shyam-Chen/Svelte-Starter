import include from 'reshape-include';
import minify from 'reshape-minify';

export default {
  plugins: [
    include(),
    minify()
  ]
};
