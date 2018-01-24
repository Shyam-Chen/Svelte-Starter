module.exports = {
  moduleNameMapper: {
    '~(.*)': '<rootDir>/src$1',
    '^.*[.](jpg|JPG|gif|GIF|png|PNG|less|LESS|css|CSS|html|pug)$': '<rootDir>/tools/empty.js'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'json'],
  setupFiles: [
    '<rootDir>/tools/setup.js'
  ]
};
