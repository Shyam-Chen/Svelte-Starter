import page from 'page';

import { home } from './home';
import { about } from './about';
import { contact } from './contact';
import { examples } from './examples';
import { admin } from './admin';
import { notfound } from './not-found';

export default () => {
  home();
  about();
  contact();
  examples();
  admin();
  notfound();
  page();
};
