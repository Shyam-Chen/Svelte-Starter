import { __moduleExports as mdTextfield } from '@material/textfield/dist/mdc.textfield';
import { template as _ } from 'lodash';
import { observable, action, autorun } from 'mobx';

import template from './crud.html';
import style from './crud.css';

const imports = { style };

export default () => {
  page('/examples/crud', () => {
    const INITIAL = [
      { id: 4, primary: 'Vanilla', accent: 'Cordova' },
      { id: 3, primary: 'Angular', accent: 'Ionic' },
      { id: 2, primary: 'React', accent: 'React Native' },
      { id: 1, primary: 'Vue', accent: 'Weex' }
    ];

    const store = observable({
      /**
       * @name observable
       */
      dataset: [...INITIAL],

      /**
       * @name action
       */
      addItem: action((primary, accent) => {
        const id = store.dataset.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;
        store.dataset = [{ id, primary, accent }, ...store.dataset];
      }),
      searchItem: action((primary, accent) => {
        const searchResult = [];

        store.dataset = INITIAL.filter(item => {
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
       get total(): number {
         return store.dataset.length;
       }
    });

    autorun(() => {
      const $ = (selector: string): HTMLElement => document.querySelector(selector);
      const $$ = (selector: string): HTMLElement[] => document.querySelectorAll(selector);

      $('#app').innerHTML = _(template, { imports })({ store });

      $('#add-button').onclick = () => {
        const primary = $('#add-primary').value;
        const accent = $('#add-accent').value;

        if (primary && accent) {
          store.addItem(primary, accent);
        }
      };

      $('#search-button').onclick = () => {
        const primary = $('#search-primary').value;
        const accent = $('#search-accent').value;

        store.searchItem(primary, accent);
      };

      [].forEach.call(
        $$('.mdc-textfield'),
        textfield => mdTextfield.MDCTextfield.attachTo(textfield)
      );
    });
  });
};
