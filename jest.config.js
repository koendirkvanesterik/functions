module.exports = {
  coverageDirectory: '<rootDir>/.jest/coverage/',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/.jest/config/imports.ts'],
  testEnvironment: 'jsdom',
}
