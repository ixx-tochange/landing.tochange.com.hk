(function() {
  'use strict';

  angular
    .module('landing')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
