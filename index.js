/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-pusher-guru',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/pusher/dist/web/pusher.js');
    if (app.env === 'test') {
      app.import(app.bowerDirectory + '/pusher-test-stub/build/bin/pusher-test-stub.js');
    }
  },
};
