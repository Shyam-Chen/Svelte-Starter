// Third party
import template from 'lodash-es/template';

// Components
import { query } from '../../utils';
import { layoutEn, layoutZh } from '../../components/layout';

// Assets
import jsData from '../../assets/datas/js-bar-chart.json';

// About
import about from './about.html';

const commom = () => {
  new Chart(query('#color-bar-chart'), {
    type: 'bar',
    data: jsData,
    options: { scales: { yAxes: [{ ticks: { beginAtZero:true } }] } }
  });
  componentHandler.upgradeAllRegistered();
};

export const loadAbout = () => {
  query('#app').innerHTML = layoutEn;
  query('#page').innerHTML = template(about)({ ABOUT: 'About' });
  query('#zh').onclick = () => { page.redirect('/zh/about'); };
  commom();
};

export const loadAboutZh = () => {
  query('#app').innerHTML = layoutZh;
  query('#page').innerHTML = template(about)({ ABOUT: '關於' });
  query('#en').onclick = () => { page.redirect('/en/about'); };
  commom();
};
