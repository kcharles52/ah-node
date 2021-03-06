module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/test-db-setup.js'],
  testPathIgnorePatterns: ['dist/'],
  restoreMocks: true,

  globals: {
    'ts-jest': {
      useBabelrc: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageReporters: ['html', 'json', 'lcov', 'text', 'clover'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/**/*.fixtures.ts',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.tsx'],
  // coverageThreshold: {
  //   global: {
  //     branches: 90,
  //     functions: 90,
  //     lines: 90,
  //     statements: 75,
  //   },
  // },
  coveragePathIgnorePatterns: [
    '/node_modules',
    '<rootDir>/src/config',
    '<rootDir>/src/index.js',
    '<rootDir>/src/server.js',
    '<rootDir>/src/utils/db.js',
  ],
}
