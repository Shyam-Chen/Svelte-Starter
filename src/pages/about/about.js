// Third party
import luyou from 'luyou';
import { template } from 'lodash-es';

// Components
import { layout } from '../../components/layout';

// About
import tpl from './about.html';
import style from './about.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const imports = { 'imports': { style } };

export const ABOUT_EN = () => {
  layout('en', 'about', template(tpl, imports)(LANGS_EN));
  componentHandler.upgradeAllRegistered();
};

export const ABOUT_ZH = () => {
  layout('zh', 'about', template(tpl, imports)(LANGS_ZH));
  componentHandler.upgradeAllRegistered();
};

export const about = () => {
  luyou('/en/about', ABOUT_EN);
  luyou('/zh/about', ABOUT_ZH);
};
