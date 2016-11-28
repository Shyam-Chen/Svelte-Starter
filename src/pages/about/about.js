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
  new Chart(query('#js-bar-chart'), {
    type: 'bar',
    data: jsData
  });

  new Chart(query('#skill-radar-chart'), {
    type: 'radar',
    data: {
      "labels": ["HTML", "CSS", "JS", "Angular", "Express", "Ionic", "Pug", "Stylus", "TypeScript"],
      "datasets": [
        {
          label: "Skills",
          backgroundColor: "rgba(179, 181, 198, .2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [90, 50, 75, 80, 50, 33, 85, 75, 80]
        }
      ]
    }
  });
  componentHandler.upgradeAllRegistered();
};

export const loadAbout = () => {
  query('#app').innerHTML = layoutEn;
  query('#page').innerHTML = template(about)({
    ABOUT: 'About',
    LIST: {
      TITLE: 'This seed repository provides the following features:',
      ITEM: 'Start coding Vanilla HTML/CSS/JS right now'
    }
  });
  query('#zh').onclick = () => { page.redirect('/zh/about'); };
  commom();
};

export const loadAboutZh = () => {
  query('#app').innerHTML = layoutZh;
  query('#page').innerHTML = template(about)({
    ABOUT: '關於',
    LIST: {
      TITLE: '此種子存儲庫提供以下功能：',
      ITEM: '現在開始編寫 Vanilla HTML / CSS / JS'
    }
  });
  query('#en').onclick = () => { page.redirect('/en/about'); };
  commom();
};
