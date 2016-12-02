// Third party
import template from 'lodash-es/template';
import forEach from 'lodash-es/forEach';

// Components
import { LAYOUT_EN, LAYOUT_ZH } from '../../components/layout';
import { circleProgressChartCompiled } from '../../components/circle-progress-chart';

// Assets
import jsData from '../../assets/datas/js-bar-chart.json';

// About
import about from './about.html';
import tplOptsEn from './langs/en.json';
import tplOptsZh from './langs/zh.json';

const imports = {
  'imports': { forEach }
};

const commom = () => {
  new Chart(document.querySelector('#js-bar-chart'), {
    type: 'bar',
    data: jsData,
    options: {
      scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
      title: { display: true, text: 'Vanilla JS' },
    }
  });

  document.querySelector('#html').innerHTML = circleProgressChartCompiled({
    color: '#FF7043', percentage: 85, size: 222, text: 'HTML', thickness: 2.2
  });

  document.querySelector('#css').innerHTML = circleProgressChartCompiled({
    color: '#42A5F5', percentage: 60, size: 222, text: 'CSS', thickness: 2.2
  });

  document.querySelector('#js').innerHTML = circleProgressChartCompiled({
    color: '#FFCA28', percentage: 75, size: 222, text: 'JS', thickness: 2.2
  });

  componentHandler.upgradeAllRegistered();
};

export const ABOUT_EN = () => {
  document.querySelector('#app').innerHTML = LAYOUT_EN;
  document.querySelector('#page').innerHTML = template(about, imports)(tplOptsEn);
  document.querySelector('#zh').onclick = () => { page.redirect('/zh/about'); };
  commom();
};

export const ABOUT_ZH = () => {
  document.querySelector('#app').innerHTML = LAYOUT_ZH;
  document.querySelector('#page').innerHTML = template(about, imports)(tplOptsZh);
  document.querySelector('#en').onclick = () => { page.redirect('/en/about'); };
  commom();
};
