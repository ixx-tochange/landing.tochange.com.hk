(function() {
  'use strict';

  angular
    .module('landing')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
