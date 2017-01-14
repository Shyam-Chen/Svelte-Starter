// Third party
import { template } from 'lodash-es';

// Components
import { layout } from '../../components/layout';

// About
import tpl from './about.html';
import style from './about.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const imports = { 'imports': { style } };

const scoreChart = () => {
  new Chart('pagespeed-insights', {
    type: 'bar',
    data: {
      labels: ["Score"],
      datasets: [
        {
          label: 'Mobile',
          data: [89],
          backgroundColor: ['rgba(111, 99, 255, .2)'],
          borderColor: ['rgba(111, 99, 255, 1)'],
          borderWidth: 1
        }, {
          label: 'Desktop',
          data: [95],
          backgroundColor: ['rgba(245, 99, 255, .2)'],
          borderColor: ['rgba(245, 99, 255, 1)'],
          borderWidth: 1
        }
      ]
    },
    options: {
      title: { display: true, text: 'PageSpeed Insights' },
      scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
    }
  });
};

export const ABOUT_EN = () => {
  layout('en', 'about', template(tpl, imports)(LANGS_EN));
  scoreChart();
  componentHandler.upgradeAllRegistered();
};

export const ABOUT_ZH = () => {
  layout('zh', 'about', template(tpl, imports)(LANGS_ZH));
  scoreChart();
  componentHandler.upgradeAllRegistered();
};

export const about = () => {
  page('/en/about', ABOUT_EN);
  page('/zh/about', ABOUT_ZH);

  page('/en/about/1', ABOUT_EN);
  page('/zh/about/1', ABOUT_ZH);
  page('/en/about/2', ABOUT_EN);
  page('/zh/about/2', ABOUT_ZH);
  page('/en/about/3', ABOUT_EN);
  page('/zh/about/3', ABOUT_ZH);
  page('/en/about/4', ABOUT_EN);
  page('/zh/about/4', ABOUT_ZH);
};
