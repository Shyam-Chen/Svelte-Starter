// Error
import template from './error.html';

export const error = () => {
  page('*', () => {
    document.querySelector('#app')
      .innerHTML = template({ statusCode: '404' });
  });
};
