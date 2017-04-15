import template from './error.html';
import data from './error.json';

export const error = () => {
  page('*', () => {
    document.querySelector('#app')
      .innerHTML = template(data);
  });
};
