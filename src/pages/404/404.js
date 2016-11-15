import notFound from './404.html';

import { query } from '../../components/utils';

export const load404 = () => {
  query('#app').innerHTML = notFound;
};
