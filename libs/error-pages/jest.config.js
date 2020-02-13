module.exports = {
  name: 'error-pages',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/error-pages',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
