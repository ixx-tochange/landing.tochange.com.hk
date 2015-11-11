(function() {
    'use strict';

    angular
        .module('landing')
        .controller('NewsController', NewsController);
        
        
    function NewsController($http) {
        var vm = this;
        
        vm.articles = [];
            
        activate();

        function activate() {
            $http({
                method: 'GET',
                url: '//tochangeapp.easy-cheque.com/api/v1/articles'
            })
            .success(function(data, status, headers, config){
                vm.articles = data._items;
            });
        }        
    }
})();