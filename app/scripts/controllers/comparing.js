'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:ComparingCtrl
 * @description
 * # ComparingCtrl
 * Controller of the nowaInnowacjaApp
 */
angular.module('nowaInnowacjaApp')
  .controller('ComparingCtrl', function ($scope) {

    var vm = this;
    vm.result1;
    vm.result2;

    $scope.$watch('comparing.data1', function () {
      if(vm.data1)
      {
        console.log("calculating");
        vm.result1 = new Hashes.SHA256().hex(vm.data1);
      }
      else
        vm.result1 = "";
    }, true);

    $scope.$watch('comparing.data2', function () {
      if(vm.data1)
      {
        console.log("calculating");
        vm.result2 = new Hashes.SHA256().hex(vm.data2);
      }
      else
        vm.result2 = "";
    }, true);



  });
