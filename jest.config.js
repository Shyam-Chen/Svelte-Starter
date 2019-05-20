module.exports = {
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tools/',
  ],
  moduleFileExtensions: ['js', 'svelte'],
  moduleNameMapper: {
    '~(.*)': '<rootDir>/src$1',
  },
  setupFilesAfterEnv: ['<rootDir>/tools/setup-test.js'],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'jest-transform-svelte',
    '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$': '<rootDir>/tools/assets-transform.js',
  },
};
