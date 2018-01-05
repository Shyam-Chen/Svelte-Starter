import { MDCTextField } from '@material/textfield';
import { template as _ } from 'lodash';
import { observable, action, autorun } from 'mobx';
import axios from 'axios';

import { $, $$ } from '~/utils';

import template from './rest.html';
import style from './rest.css';

export const API_LIST = 'https://web-go-demo.herokuapp.com/__/list';

export const store = observable({
  // observable
  dataset: [],
  searchData: { text: '' },
  addData: { text: '' },
  editData: { _id: 0, text: '', dialog: false },
  deleteData: { _id: 0, dialog: false },
  loading: false,

  // action
  searchItem: action(text => {
    store.loading = true;

    axios.get(text ? `${API_LIST}?text=${text}` : API_LIST)
      .then(({ data }) => {
        store.loading = false;
        store.dataset = data.reverse();
        store.searchData.text = '';
      })
      .catch(error => console.error(error));
  }),
  addItem: action(text => {
    axios.post(API_LIST, { text })
      .then(() => {
        store.addData.text = '';
        store.searchItem();
      });
  }),
  deleteItem: action(() => {
    // ...
  }),
  editItem: action(() => {
    // ...
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
    const text = $('#search-text').value;
    store.searchItem(text);
  };

  [].forEach.call(
    $$('.mdc-text-field'),
    textfield => MDCTextField.attachTo(textfield)
  );
};

export default (parent: string): void =>
  page(`${parent}/rest`, () => autorun(render));
