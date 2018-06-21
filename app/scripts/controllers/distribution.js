'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:DistributionCtrl
 * @description
 * # DistributionCtrl
 * Controller of the nowaInnowacjaApp
 */
angular.module('nowaInnowacjaApp')
  .controller('DistributionCtrl', function ($scope) {

    var vm = this;
    vm.result1;
    vm.result2;

    $scope.$watch('distribution.data1', function () {
      if(vm.data1)
      {
        console.log("calculating");
        vm.result1 = new Hashes.SHA256().hex(vm.data1);
      }
      else
        vm.result1 = "";
    }, true);

    $scope.$watch('distribution.data2', function () {
      if(vm.data1)
      {
        console.log("calculating");
        vm.result2 = new Hashes.SHA256().hex(vm.data2);
      }
      else
        vm.result1 = "";
    }, true);



  });
