// Third party
import template from 'lodash-es/template';

// Components and Assets
import { query } from '../../components/utils';
import { layout, layoutZh } from '../../components/layout';
import colorData from '../../assets/datas/color-bar-chart.json';

// About
import about from './about.html';

const commom = () => {
  new Chart(query('#color-bar-chart'), {
    type: 'bar',
    data: { labels: ['ECMAScript', 'HTML5', 'Node.js', 'Cordova'], datasets: colorData },
    options: { scales: { yAxes: [{ ticks: { beginAtZero:true } }] } }
  });
  componentHandler.upgradeAllRegistered();
};

export const loadAbout = () => {
  query('#app').innerHTML = layout;
  query('#page').innerHTML = template(about)({ ABOUT: 'About' });
  query('#zh').onclick = () => { page.redirect('/about/zh'); };
  commom();
};

export const loadAboutZh = () => {
  query('#app').innerHTML = layoutZh;
  query('#page').innerHTML = template(about)({ ABOUT: '關於' });
  query('#en').onclick = () => { page.redirect('/about'); };
  commom();
};
