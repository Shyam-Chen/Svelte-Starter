export const lodash = () => {
  return new class Lodash {
    resolveId(id) {
      if (id.startsWith('lodash') && !id.startsWith('lodash-es')) {
        return `node_modules/lodash-es/${id.replace('lodash/', '')}.js`;
      }
    }
  };
};
