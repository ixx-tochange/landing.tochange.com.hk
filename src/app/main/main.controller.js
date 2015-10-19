(function() {
  'use strict';

  angular
    .module('landing')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;
    
    vm.dimension = {
        length: 0,
        width: 0,
        height: 0,
        weight: 0
    }

    activate();

    function activate() {
      
      
    }

    
  }
})();
