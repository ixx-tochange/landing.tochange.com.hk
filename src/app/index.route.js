(function() {
  'use strict';

  angular
    .module('landing')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
            abstract: true,
            templateUrl: 'app/layout/default.tmpl.html'
      })
        
      .state('landing.home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as vm'
      })
      
      .state('landing.tutorial', {
        url: '/tutorial',
        templateUrl: 'app/main/tutorial.html'
      })
      .state('landing.price-list', {
        url: '/price-list',
        templateUrl: 'app/main/price-list.html'
      })
      .state('landing.address', {
        url: '/address',
        templateUrl: 'app/main/address.html'
      })
      .state('landing.faq', {
        url: '/faq',
        templateUrl: 'app/main/faq.html',
        controller: 'FAQController as vm'
      })
      .state('landing.alipay', {
        url: '/alipay',
        templateUrl: 'app/main/alipay.html'
      })
      .state('landing.news', {
        url: '/news',
        templateUrl: 'app/main/news.html',
        controller: 'NewsController as vm'
      })
      .state('landing.tandc', {
        url: '/tandc',
        templateUrl: 'app/main/tandc.html'
      })
      .state('landing.payment_tandc', {
        url: '/payment_tandc',
        templateUrl: 'app/main/payment_tandc.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
