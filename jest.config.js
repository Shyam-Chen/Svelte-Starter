module.exports = {
  moduleNameMapper: {
    '~(.*)': '<rootDir>/src$1',
    '^.*[.](jpg|JPG|gif|GIF|png|PNG|less|LESS|css|CSS|html|pug)$': '<rootDir>/tools/empty.js'
  },
  setupFiles: [
    '<rootDir>/tools/setup.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  // transformIgnorePatterns: [
  //   'node_modules/(?!@material)/'
  // ]
};
