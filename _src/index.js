require(['require.config'], function () {

  require([

      'apps/mvi-example/app',
      // 'apps/hello-v-dom',
      // 'apps/hello-rx'

    ], function (App) {

      window.onload = App.start();

    });

});