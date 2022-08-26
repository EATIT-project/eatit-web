module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest'],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^(pages|_tosslib)/(.*)': '<rootDir>/src/$1/$2',
    '^uuid$': require.resolve('uuid'),
  },
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testTimeout: 10000,
  testEnvironment: 'jsdom',
};
