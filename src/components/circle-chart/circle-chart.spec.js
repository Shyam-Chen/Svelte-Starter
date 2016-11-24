import tpl from './circle-chart.html';
import { circleChart } from './circle-chart';

describe('Circle-Chart', () => {

  it('toMatch', () => {
    expect(tpl).toMatch(/circle-chart/);
    expect(tpl).toMatch(/circle-chart-svg/);
    expect(tpl).toMatch(/circle-chart-background/);
    expect(tpl).toMatch(/circle-chart-progress/);
    expect(tpl).toMatch(/circle-chart-js_progress/);
    expect(tpl).toMatch(/circle-chart-text/);
  });

  it('toBeDefined', () => {
    expect(circleChart).toBeDefined();
  });

});
