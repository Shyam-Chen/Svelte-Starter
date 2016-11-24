// Third party
import template from 'lodash-es/template';

// Components
import { query } from '../../utils';
import { layout, layoutZh } from '../../components/layout';
import { circleChart } from '../../components/circle-chart';

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
  circleChart('#cc1', 22);
  circleChart('#cc2', 75, '#AD1457', 300, 'Vanilla');
  circleChart('#cc3', 55, null, 120);
  circleChart('#cc4', 88, '#009688');
  componentHandler.upgradeAllRegistered();
};

export const loadAbout = () => {
  query('#app').innerHTML = layout;
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
