import { template as _ } from 'lodash';
import { observable, action, autorun } from 'mobx';
import axios from 'axios';

import { $ } from '~/utils';

import template from './rest.html';
import style from './rest.css';

export default (parent: string) => {
  page(`${parent}/rest`, () => {
    const API_LIST = 'https://web-go-demo.herokuapp.com/__/list';

    const store = observable({
      /**
       * @name observable
       */
      dataset: [],
      searchData: { text: '' },

      /**
       * @name action
       */
      searchItem: action(() => {
        axios.get(API_LIST)
          .then(({ data }) => {
            store.dataset = data;
            store.searchData['text'] = '';
          });
      }),

      /**
       * @name computed
       */
       get total(): number {
         return store.dataset.length;
       }
    });

    autorun(() => {
      $('#app').innerHTML = _(template, { imports: { style } })({ store });

      $('#search-button').onclick = () => {

        store.searchItem();
      };
    });
  });
};
