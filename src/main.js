import './pages/home/home';
import './pages/about/about';

import { loadHome, loadAbout } from './components/navigation/navigation';


// ToDo: 需要重構
if (document.location.pathname === '/') {
  window.onload = loadHome;
}

if (document.location.pathname === '/about') {
  window.onload = loadAbout;
}
