import { MDCTextField } from '@material/textfield';
import { MDCDialog } from '@material/dialog';
import page from 'page';
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
    store.loading = true;

    axios.post(API_LIST, { text })
      .then(() => {
        store.addData.text = '';
        store.searchItem();
      })
      .catch(error => console.error(error));
  }),
  deleteItem: action(_id => {
    store.loading = true;

    axios.delete(`${API_LIST}/${_id}`)
      .then(() => {
        store.deleteData.dialog = false;
        store.searchItem();
      })
      .catch(error => console.error(error));
  }),
  editItem: action((_id, text) => {
    store.loading = true;

    axios.put(`${API_LIST}/${_id}`, { text })
      .then(() => {
        store.editData.dialog = false;
        store.searchItem();
      })
      .catch(error => console.error(error));
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

  $('#add-button').onclick = () => {
    const text = $('#add-text').value;
    if (text) store.addItem(text);
  };

  const dialogDeleteEl = $('#dialog-delete');
  const dialogDelete = new MDCDialog(dialogDeleteEl);

  [].forEach.call(
    $$('.mdc-button[data-delete]'),
    deleteButton => {
      deleteButton.onclick = (): void => {
        dialogDelete.show();
        document.body.style.overflowY = 'hidden';

        $('#delete-confirm').onclick = (): void => {
          const _id = deleteButton.dataset.delete;
          store.deleteItem(_id);
        };
      };
    }
  );

  const dialogEditEl = $('#dialog-edit');
  const dialogEdit = new MDCDialog(dialogEditEl);

  [].forEach.call(
    $$('.mdc-button[data-edit]'),
    editButton => {
      editButton.onclick = (): void => {
        dialogEdit.show();
        document.body.style.overflowY = 'hidden';

        const text = $('#edit-text');

        text.value = editButton.dataset.editText;

        $('#edit-save').onclick = (): void => {
          const _id = editButton.dataset.edit;
          store.editItem(_id, text.value);
        };
      };
    }
  );

  /**
   * @name MDC
   */

  [dialogDelete].forEach((dialog: MDCDialog): void => {
    dialog.listen('MDCDialog:accept', () => document.body.style.overflowY = 'auto');
    dialog.listen('MDCDialog:cancel', () => document.body.style.overflowY = 'auto');
  });

  [].forEach.call(
    $$('.mdc-text-field'),
    textfield => MDCTextField.attachTo(textfield)
  );
};

export default (parent: string): void =>
  page(`${parent}/rest`, () => autorun(render));
