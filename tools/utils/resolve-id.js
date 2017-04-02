export const lodash = () => {
  return new class Lodash {
    resolveId(id) {
      if (id.startsWith('lodash') && !id.startsWith('lodash-es')) {
        return `node_modules/lodash-es/${id.replace('lodash/', '')}.js`;
      }
    }
  };
};

export const reactivex = () => {
  return new class ReactiveX {
    resolveId(id) {
      if (id.startsWith('rxjs') && !id.startsWith('rxjs-es')) {
        return `node_modules/@reactivex/rxjs/dist/es6/${id.replace('rxjs/', '')}.js`;
      }
    }
  };
};
