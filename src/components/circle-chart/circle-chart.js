import tpl from './circle-chart.html';
import './circle-chart.css';

export const circleChart = (id = 'body', percentage = 1, color = '#000', size = 200, text = '') => {
  document.querySelector(`${id}`).innerHTML = tpl;
  document.querySelector(`${id} .circle-chart`).style.cssText = `width: ${size}px; height: ${size}px`;
  document.querySelector(`${id} .circle-chart-background`).style.cssText = `stroke-width: ${size * .0066}px`;
  document.querySelector(`${id} .circle-chart-progress`).style.cssText = `stroke: ${color}; stroke-width: ${size * .0066}px`;
  document.querySelector(`${id} .circle-chart-js_progress`).style.strokeDashoffset = 100 - percentage;
  document.querySelector(`${id} .circle-chart-text`).innerHTML = text !== '' ? `${text}` : `${percentage}%`;
  document.querySelector(`${id} .circle-chart-text`).style.cssText = `transform: translate(0, ${-size * .5555}px); font-size: ${size * .2}px; color: ${color}`;
};
