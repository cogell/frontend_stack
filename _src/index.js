var requirejs = require('requirejs');

require(['require.config'], function () {

  require([

      'apps/app'

    ], function (App) {

      App.start();

    });

});