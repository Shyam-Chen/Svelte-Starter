import { template as _ } from 'lodash';
import { observable, action, autorun } from 'mobx';
import axios from 'axios';

import { $ } from '~/utils';

import template from './rest.html';
import style from './rest.css';

export const API_LIST = 'https://web-go-demo.herokuapp.com/__/list';

export const store = observable({
  // observable
  dataset: [],
  searchData: { text: '' },
  loading: false,

  // action
  searchItem: action(() => {
    axios.get(API_LIST)
      .then(({ data }) => {
        store.dataset = data;
        store.searchData['text'] = '';
      })
      .then(() => {
        store.loading = false;
      });
  }),

  // computed
  get total(): number {
    return store.dataset.length;
  },
  get progress(): boolean {
    return store.loading ? '' : 'none';
  }
});

export const render = (): void => {
  $('#app').innerHTML = _(template, { imports: { style } })({ store });

  $('#search-button').onclick = () => {
    store.searchItem();
    store.loading = true;
  };
};

export default (parent: string): void =>
  page(`${parent}/rest`, () => autorun(render));
