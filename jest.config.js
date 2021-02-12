// // SEE ALSO: https://kulshekhar.github.io/ts-jest/user/config/#jest-config-with-helper
// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// // In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// // which contains the path mapping (ie the `compilerOptions.paths` option):
// const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      // diagnostics: false,
      tsConfig: {
        jsx: 'react',
      },
    },
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.yml?$': 'yaml-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'yml'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^~/(.+)$': '<rootDir>/src/$1',
    '^.+\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules',
  },
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  automock: false,
  snapshotSerializers: ['@emotion/jest/serializer'],
};
