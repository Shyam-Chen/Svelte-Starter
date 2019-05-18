module.exports = (api) => {
  api.cache(true);

  return {
    env: {
      app: {
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'entry',
              corejs: '3',
              shippedProposals: true,
            },
          ],
        ],
        plugins: [],
      },
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'entry',
              corejs: '3',
              shippedProposals: true,
              targets: {
                node: 'current',
              },
            },
          ],
        ],
        plugins: [],
      },
    },
  };
};
