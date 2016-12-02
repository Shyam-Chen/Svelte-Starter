import tpl from './circle-progress-chart.html';

import { circleProgressChartCompiled } from './circle-progress-chart';

describe('Circle Progress Chart', () => {

  describe('Template', () => {
    it('toMatch', () => {
      expect(tpl).toMatch(/<%= color %>/);
    });
  });

  it('toBeDefined', () => {
    expect(circleProgressChartCompiled).toBeDefined();
  });

  it('toBeDefined', () => {
    const dummyElement = document.createElement('div');
    document.querySelector = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

    const cpc = document.querySelector('#cpc').innerHTML = circleProgressChartCompiled({
      color: '#5C6BC0', percentage: 77, size: 222, title: 'Vanilla', thickness: 2.2
    });

    expect(cpc).toBeDefined();
  });

});
