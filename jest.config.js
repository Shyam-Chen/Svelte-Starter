module.exports = {
  moduleNameMapper: {
    '~(.*)': '<rootDir>/src$1',
    '^.*[.](jpg|JPG|gif|GIF|png|PNG|less|LESS|css|CSS|html|pug)$': '<rootDir>/tools/utils/empty-mapper.js'
  },
  setupFiles: [
    '<rootDir>/tools/utils/setup-files.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  // transformIgnorePatterns: [
  //   'node_modules/(?!@material)/'
  // ]
};
