import { observable, action } from 'mobx';

export const store = observable({
  value: 0,

  increment: action(() => store.value++),
  decrement: action(() => store.value--),

  get evenOrOdd() {
    return store.value % 2 === 0 ? 'even' : 'odd';
  }
});
