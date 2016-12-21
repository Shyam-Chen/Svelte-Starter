// Third party
import _template from 'lodash-es/template';

// Components
import { layout } from '../../components/layout';

// Assets
import vanilla from '../../assets/images/vanilla.png';

// Main
import template from './home.html';
import style from './home.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

export const HOME_EN = () => {
  const content = _template(template, {
    'imports': {
      style,
      'image': { 'vanilla': vanilla.src },
      'TODAY': new Intl.DateTimeFormat('en').format(new Date())
    }
  })(LANGS_EN);

  layout('en', 'home', content);

  componentHandler.upgradeAllRegistered();
};

export const HOME_ZH = () => {
  const content = _template(template, {
    'imports': {
      style,
      'image': {
        'vanilla': vanilla.src
      },
      'TODAY': new Intl.DateTimeFormat('zh').format(new Date())
    }
  })(LANGS_ZH);

  layout('zh', 'home', content);

  componentHandler.upgradeAllRegistered();
};
