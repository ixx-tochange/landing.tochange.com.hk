(function() {
    'use strict';

    angular
        .module('landing')
        .controller('FAQController', FAQController);
        
        
    function FAQController($http, API_CONFIG) {
        var vm = this;
        
        vm.faqs = [];
            
        activate();

        function activate() {
            $http({
                method: 'GET',
                url: '//tochangeapp.easy-cheque.com/api/v1/faqs'
            })
            .success(function(data, status, headers, config){
                vm.faqs = data._items;
            });
        }        
    }
})();