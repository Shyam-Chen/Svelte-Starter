// Third party
import _template from 'lodash-es/template';
import _forEach from 'lodash-es/forEach';

// Components
import { layout } from '../../components/layout';

// About
import template from './about.html';
import style from './about.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const imports = { 'imports': { _forEach, style } };

export const ABOUT_EN = () => {
  layout('en', 'about');
  document.querySelector('#page').innerHTML = _template(template, imports)(LANGS_EN);
  componentHandler.upgradeAllRegistered();
};

export const ABOUT_ZH = () => {
  layout('zh', 'about');
  document.querySelector('#page').innerHTML = _template(template, imports)(LANGS_ZH);
  componentHandler.upgradeAllRegistered();
};
