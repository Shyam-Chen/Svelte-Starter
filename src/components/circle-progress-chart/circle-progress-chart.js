import template from 'lodash-es/template';

/**
 * @private
 */
import tpl from './circle-progress-chart.html';
import style from './circle-progress-chart.css';

/**
 * @exports
 *
 * @param {string} color - color of circle and text
 * @param {number} percentage - percentage of chart information
 * @param {number} size - size of chart
 * @param {string} text - text of chart
 * @param {number} thickness - thickness of line
 *
 * @example
 * // JS
 * import { circleProgressChartCompiled } from '../../components/circle-progress-chart';
 * document.querySelector('#cpc').innerHTML = circleProgressChartCompiled({
 *   color: '#5C6BC0', percentage: 77, size: 222, text: 'Vanilla', thickness: 2.2
 * });
 *
 * // HTML
 * <div id="cpc"></div>
 */
export const circleProgressChartCompiled = template(tpl, { 'imports': { style } });
