import template from 'lodash-es/template';

import { query } from '../../components/utils';
import { layout } from '../../components/layout';
import colorData from '../../assets/datas/color-bar-chart.json';

import about from './about.html';

export const loadAbout = () => {
  query('#app').innerHTML = layout;
  query('#page').innerHTML = template(about)({ });

  new Chart(query('#color-bar-chart'), {
    type: 'bar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [colorData]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });


  componentHandler.upgradeAllRegistered();
};
