require(['require.config'], function () {

  require([

      'apps/app',
      'apps/hello-v-dom',
      'apps/hello-rx'

    ], function (App) {

      App.start();

    });

});