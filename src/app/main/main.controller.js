(function() {
  'use strict';

  angular
    .module('landing')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $timeout, webDevTec, toastr) {
    var vm = this;
    
    vm.dimension = {
        length: 0,
        width: 0,
        height: 0,
        weight: 0
    }
    vm.priceList = "1";
    vm.mail = {
        name: "",
        email: "",
        phone: "",
        member_id: "",
        content: ""
    }
    
    vm.getFreight = getFreight;
    vm.sendMail = sendMail;
    
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
    
    
        
    
    function getFreight(){
        if(vm.dimension.weight == 0){
            return "-";
        }
        if(vm.priceList == "1"){
            return "RMB " + (13 + Math.max(Math.ceil(vm.dimension.weight) - 1, 0)*6);
        }else if(vm.priceList == "2"){
            return "RMB " + Math.max(Math.ceil(vm.dimension.weight) - 0, 100)*5;
        }else if(vm.priceList == "3"){
            return "HKD " + (14 + ((vm.dimension.weight-1)*8));
        }
    }
    
    function sendMail(){
        console.log(vm.mail);
        
        $http({
            method: 'POST',
            url: '//tochangeapp.easy-cheque.com/enquiry',
            data: vm.mail
        })
        .success(function(data, status, headers, config){
            alert("message sent");
            
            vm.mail = {
                name: "",
                email: "",
                phone: "",
                member_id: "",
                content: ""
            }
        })
        .error(function(data, status, headers, config){
            alert("please try again later.");
        })
    }

    
  }
})();
