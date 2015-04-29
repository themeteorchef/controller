Package.describe({
  name: 'themeteorchef:controller',
  version: '1.1.0',
  summary: 'An API for organizing your template logic.',
  git: 'https://github.com/themeteorchef/controller',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use(['templating'], 'client');

  api.addFiles([
    'lib/controller.js'
  ], ['client']);

  api.export('Controller', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'templating',
    'themeteorchef:controller'
  ], ['client']);

  api.addFiles([
    'tests/test-template.html',
    'tests/controller-tests.js'
  ], ['client']);
});
