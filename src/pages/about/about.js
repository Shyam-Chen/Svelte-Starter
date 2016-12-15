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
  new Chart('myChart', {
    type: 'bar',
    data: {
      labels: ["JS", "Lodash", "ReactiveX", "Material", "Firebase"],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: { scales: { yAxes: [{ ticks: { beginAtZero:true } }] } }
  });
};

export const ABOUT_EN = () => {
  layout('en', 'about');
  document.querySelector('#page').innerHTML = _template(template, imports)(LANGS_EN);
  chart();
  componentHandler.upgradeAllRegistered();
};

export const ABOUT_ZH = () => {
  layout('zh', 'about');
  document.querySelector('#page').innerHTML = _template(template, imports)(LANGS_ZH);
  chart();
  componentHandler.upgradeAllRegistered();
};
