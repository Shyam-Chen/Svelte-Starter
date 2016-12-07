// import _template from 'lodash-es/template';
// import _forEach from 'lodash-es/forEach';

import template from './layout.html';

describe('Layout', () => {

  describe('Template', () => {
    it('should be used `fixed-header`', () => {
      expect(template).toMatch(/mdl-layout--fixed-header/);
      expect(template).not.toMatch(/mdl-layout--fixed-drawer/);
    });
  });

});
