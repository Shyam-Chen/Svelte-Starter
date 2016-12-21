// Third party
import _template from 'lodash-es/template';

// Components
import { layout } from '../../components/layout';

// About
import template from './about.html';
import style from './about.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const imports = { 'imports': { style } };

const chart = () => {
  new Chart('pagespeed-insights', {
    type: 'bar',
    data: {
      labels: ["Mobile", "Desktop"],
      datasets: [
        {
          label: 'Score',
          data: [89, 95],
          backgroundColor: [
            'rgba(111, 99, 255, .2)',
            'rgba(111, 99, 255, .2)'
          ],
          borderColor: [
            'rgba(111, 99, 255, 1)',
            'rgba(111, 99, 255, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      title: { display: true, text: 'PageSpeed Insights' },
      scales: { yAxes: [{ ticks: { beginAtZero:true } }] }
    }
  });
};

export const ABOUT_EN = () => {
  layout('en', 'about', _template(template, imports)(LANGS_EN));
  chart();
  componentHandler.upgradeAllRegistered();
};

export const ABOUT_ZH = () => {
  layout('zh', 'about', _template(template, imports)(LANGS_ZH));
  chart();
  componentHandler.upgradeAllRegistered();
};
