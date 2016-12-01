import template from 'lodash-es/template';

/**
 * @private
 */
import tpl from './circle-progress-chart.html';
import styl from './circle-progress-chart.css';

/**
 * @exports
 *
 * @param {string} color - color of circle and text
 * @param {number} percentage - percentage of chart information
 * @param {number} size - size of chart
 * @param {number} thickness - thickness of line
 */
export const circleProgressChartCompiled = template(tpl, { 'imports': { 'style': styl }});

/**
 * @example
 *
 * import { circleProgressChartCompiled } from '../../components/circle-progress-chart';
 * query('#cc1').innerHTML = circleProgressChartCompiled({
 *   color: '#673AB7', percentage: 75, size: 222, thickness: 2.2
 * });
 *
 * <div id="cc1"></div>
 */
