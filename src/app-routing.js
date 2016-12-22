import { HOME_EN, HOME_ZH } from './pages/home';
import { ABOUT_EN, ABOUT_ZH } from './pages/about';
import { CONTACT_EN, CONTACT_ZH } from './pages/contact';
import { ERROR } from './pages/error';

/**
 * @deprecated
 */
switch (true) {
  case /zh/.test(navigator.language):
    page('/', HOME_ZH);
    break;
  default:
    page('/', HOME_EN);
}

page('/en/home', HOME_EN);
page('/en/about', ABOUT_EN);
page('/en/contact', CONTACT_EN);

page('/zh/home', HOME_ZH);
page('/zh/about', ABOUT_ZH);
page('/zh/contact', CONTACT_ZH);

page('*', ERROR);

page();
