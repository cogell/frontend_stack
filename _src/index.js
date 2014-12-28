require(['require.config'], function () {

  require([

      'apps/app',
      'apps/hello-v-dom'

    ], function (App) {

      App.start();

    });

});