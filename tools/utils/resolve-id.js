class Lodash {
  resolveId(id) {
    if (id.startsWith('lodash')) {
      return `node_modules/lodash-es/${id.replace('lodash/', '')}.js`;
    }
  }
}

class ReactiveX {
  resolveId(id) {
    if (id.startsWith('rxjs')) {
      return `node_modules/@reactivex/rxjs/dist/es6/${id.replace('rxjs/', '')}.js`;
    }
  }
}

export const lodash = () => new Lodash();
export const reactivex = () => new ReactiveX();
