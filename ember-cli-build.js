/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  app.import('bower_components/pusher/dist/web/pusher.js');
  if(app.env === 'test') {
    app.import('bower_components/pusher-test-stub/build/bin/pusher-test-stub.js');
  }

  return app.toTree();
};
