import { MDCRipple } from '@material/ripple';
import { MDCDialog } from '@material/dialog';
import { MDCTextField } from '@material/textfield';
import { template as _ } from 'lodash';

import { $, $$ } from '~/utils';

import template from './users.html';
import style from './users.css';

export const users = (page: string): void => {
  firebase.firestore()
    .collection('users')
    .get()
    .then(snapshot => {
      $(`#users[data-${page}]`)
        .innerHTML = _(template, { imports: { style, snapshot } })();

      const bodyEl = document.body;

      const search = $('#search');

      const dialogEditEl = $('#dialog-edit');
      const dialogEdit = new MDCDialog(dialogEditEl);
      const name = $('#edit-name');
      const email = $('#edit-email');
      const message = $('#edit-message');
      const save = $('#edit-save');

      const dialogDeleteEl = $('#dialog-delete');
      const dialogDelete = new MDCDialog(dialogDeleteEl);
      const confirm = $('#delete-confirm');

      search.onkeyup = (): void => {
        const input = $('#search');
        const filter = input.value.toUpperCase();
        const tbody = $('#users-table > tbody');
        const tr = tbody.querySelectorAll('tr');

        for (let i = 0; i < tr.length; i++) {
          const tds = tr[i].querySelectorAll('td');
          const find = [].findIndex.call(tds, td => td.innerHTML.toUpperCase().indexOf(filter) !== -1);

          if (find === -1 || find === (tds.length - 1)) {
            tr[i].style.display = 'none';
          } else {
            tr[i].style.display = '';
          }
        }
      };

      const sliceAll = (selector: string, element: HTMLElement = document): string[] =>
        [].slice.call((element).querySelectorAll(selector));

      sliceAll('tbody').forEach((body: HTMLTableElement): void => {
        sliceAll('tr', body).reverse()
          .forEach(row => body.appendChild(row));
      });

      [dialogEdit, dialogDelete].forEach((dialog): void => {
        dialog.listen('MDCDialog:accept', () => bodyEl.style.overflowY = 'auto');
        dialog.listen('MDCDialog:cancel', () => bodyEl.style.overflowY = 'auto');
      });

      [].forEach.call(
        $$('.mdc-button[data-edit]'),
        editButton => {
          editButton.onclick = (): void => {
            dialogEdit.show();
            bodyEl.style.overflowY = 'hidden';

            name.value = editButton.dataset.editName;
            email.value = editButton.dataset.editEmail;
            message.value = editButton.dataset.editMessage;

            save.onclick = (): void => {
              firebase.firestore()
                .collection('users')
                .doc(editButton.dataset.edit)
                .update({ name: name.value, email: email.value, message: message.value })
                .then(() => users('admin'));
            };
          };
        }
      );

      [].forEach.call(
        $$('.mdc-button[data-delete]'),
        deleteButton => {
          deleteButton.onclick = (): void => {
            dialogDelete.show();
            bodyEl.style.overflowY = 'hidden';

            confirm.onclick = (): void => {
              firebase.firestore()
                .collection('users')
                .doc(deleteButton.dataset.delete)
                .delete()
                .then(() => users('admin'));
            };
          };
        }
      );

      [].forEach.call(
        $$('.mdc-button'),
        ripple => MDCRipple.attachTo(ripple)
      );

      [].forEach.call(
        $$('.mdc-text-field'),
        textfield => MDCTextField.attachTo(textfield)
      );
    });
};
