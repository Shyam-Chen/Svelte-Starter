class ReactiveX {
  resolveId(id) {
    if (id.startsWith('rxjs/')) {
      return `node_modules/@reactivex/rxjs/dist/es6/${id.replace('rxjs/', '')}.js`;
    }
  }
}

export const reactivex = () => new ReactiveX();
