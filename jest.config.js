const path = require('path');


module.exports = {
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
    ],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    snapshotSerializers: [
        'jest-serializer-vue',
    ],
    alias: {
        '#': path.join(__dirname, 'public'),
    },
    testMatch: [
        '**/tests/**/*.(spec|test).(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    ],
    testURL: 'http://localhost/',
    collectCoverage: true,
    collectCoverageFrom: [
        '!src/plugins/*.(js|vue)',
        '!public/vendor/*.js',
        'src/**/*.(js|vue)',
        'public/**/*.js',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: [
        'lcov',
    ],
};
