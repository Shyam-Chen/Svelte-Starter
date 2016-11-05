import { loadHome, loadAbout } from './components/navigation/navigation.js';

import { load404 } from './pages/404';

page('/', loadHome);
page('/about', loadAbout);
page('*', load404);
page();
