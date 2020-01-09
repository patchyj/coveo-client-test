module.exports = {
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tools/assetsTransformer.js',
    '\\.(scss|css)$': '<rootDir>/tools/assetsTransformer.js'
  },
  setupFiles: ['raf/polyfill', './tools/enzymeTestAdapterSetup.js'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        theme: 'darkTheme',
        outputPath: './coverage/test-report.html'
      }
    ]
  ]
};
