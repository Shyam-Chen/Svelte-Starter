import { __moduleExports as mdRipple } from '@material/ripple/dist/mdc.ripple';
import { __moduleExports as mdDialog } from '@material/dialog/dist/mdc.dialog';
import { __moduleExports as mdTextfield } from '@material/textfield/dist/mdc.textfield';

import { template as _ } from 'lodash';

import template from './users.html';
import style from './users.css';

export const users = (page: string): void => {
  const $ = (selector: string): HTMLElement => document.querySelector(selector);
  const $$ = (selector: string): HTMLElement[] => document.querySelectorAll(selector);

  // pagination
  // firebase.database()
  //   .ref('users')
  //   .orderByKey()
  //   .limitToFirst(5)
  //   .startAt('-KqC5w9AgVqHFQLBKN4P')
  //   .on('value', (snapshot): void => {
  //     console.log(snapshot.val());
  //     console.log(snapshot.val()['-KqC5w9AgVqHFQLBKN4P']);
  //   });

  firebase.database()
    .ref('users')
    .on('value', (snapshot): void => {
      $(`#users[data-${page}]`)
        .innerHTML = _(template, { imports: { style, snapshot } })();

        const bodyEl = document.body;

        const search = $('#search');

        const dialogEditEl = $('#dialog-edit');
        const dialogEdit = new mdDialog.MDCDialog(dialogEditEl);
        const name = $('#edit-name');
        const email = $('#edit-email');
        const message = $('#edit-message');
        const save = $('#edit-save');

        const dialogDeleteEl = $('#dialog-delete');
        const dialogDelete = new mdDialog.MDCDialog(dialogDeleteEl);
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
                firebase.database()
                  .ref(`users/${editButton.dataset.edit}`)
                  .update({ name: name.value, email: email.value, message: message.value });
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
                firebase.database()
                  .ref(`users/${deleteButton.dataset.delete}`)
                  .remove();
              };
            };
          }
        );

        [].forEach.call(
          $$('.mdc-button'),
          ripple => mdRipple.MDCRipple.attachTo(ripple)
        );

        [].forEach.call(
          $$('.mdc-textfield'),
          textfield => mdTextfield.MDCTextfield.attachTo(textfield)
        );
    });
};
