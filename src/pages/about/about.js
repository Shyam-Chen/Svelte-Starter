// Third party
import luyou from 'luyou';
import { template } from 'lodash-es';
import { select } from 'd3-selection';
import { transition } from 'd3-transition';

// Components
import { layout } from '../../components/layout';

// About
import tpl from './about.html';
import style from './about.css';
import LANGS_EN from './langs/en.json';
import LANGS_ZH from './langs/zh.json';

const ddd = () => {
  const dddEl = select('#ddd');

  dddEl.text('Hello!')
    .style('text-align', 'center')
    .style('line-height', '10rem')
    .style('font-size', '7rem')
    ::transition()
    .duration(2000)
    .style('color', '#F44336');
};

const imports = { 'imports': { style } };

export const ABOUT_EN = () => {
  layout('en', 'about', template(tpl, imports)(LANGS_EN));
  ddd();
  componentHandler.upgradeAllRegistered();
};

export const ABOUT_ZH = () => {
  layout('zh', 'about', template(tpl, imports)(LANGS_ZH));
  ddd();
  componentHandler.upgradeAllRegistered();
};

export const about = () => {
  luyou('/en/about', ABOUT_EN);
  luyou('/zh/about', ABOUT_ZH);
};
