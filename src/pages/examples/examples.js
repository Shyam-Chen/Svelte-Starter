import { template as _ } from 'lodash';

// import { counterFunc } from './counter';

import template from './examples.html';
import style from './examples.css';

export const examples = (): void => {
  // counterFunc();

  page('/examples', () => {
    document.querySelector('#app')
      .innerHTML = _(template, { imports: { style } })();
  });
};
