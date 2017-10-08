import { template as _ } from 'lodash';
import { observable, action, autorun } from 'mobx';

import template from './crud.html';
import style from './crud.css';

const imports = { style };

export default () => {
  page('/examples/crud', () => {
    const store = observable({
      /**
       * @name observable
       */
      dataset: [
        { id: 4, primary: 'Vanilla', accent: 'Cordova' },
        { id: 3, primary: 'Angular', accent: 'Ionic' },
        { id: 2, primary: 'React', accent: 'React Native' },
        { id: 1, primary: 'Vue', accent: 'Weex' }
      ],
      addData: { primary: '', accent: '' },
      searchData: { primary: '', accent: '' },
      editData: { id: 0, primary: '', accent: '' },
      deleteData: { id: 0 },

      /**
       * @name action
       */
      addItem: action((primary, accent) => {
        const id = store.dataset.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;
        store.dataset = [{ id, primary, accent }, ...store.dataset];
      }),
      searchItem: action((primary, accent) => {
        const searchResult = [];

        store.dataset = store.dataset.filter(item => {
          // TODO: indexOf -> find
          const _primary = item.primary.toLowerCase().indexOf(primary.toLowerCase());
          const _accent = item.accent.toLowerCase().indexOf(accent.toLowerCase());

          if (_primary !== -1 && _accent !== -1) {
            return searchResult.push(item);
          }
        });
      }),
      editItem: action(() => {

      }),
      deleteItem: action(() => {

      }),

      /**
       * @name computed
       */
      // ...
    });

    autorun(() => {
      document.querySelector('#app')
        .innerHTML = _(template, { imports })({ store });
    });
  });
};
