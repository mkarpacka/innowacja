'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:HashPuzzleCtrl
 * @description
 * # HashPuzzleCtrl
 * Controller of the nowaInnowacjaApp
 */


angular.module('nowaInnowacjaApp')
  .controller('HashingCtrl', function ($scope) {

    var vm = this;

    vm.md5;
    vm.sha1;
    vm.sha256;
    vm.sha512;
    vm.rmd160;


    let disableCalulate = true;


    $scope.$watch('hashing.textToCalculate', function () {
      if (!disableCalulate)
        calculate();

      disableCalulate = false;
    }, true);
    
    let calculate = function () {
      console.log("function texttocalculate")
      vm.md5 = new Hashes.MD5().hex(vm.textToCalculate);
      vm.sha1 = new Hashes.SHA1().hex(vm.textToCalculate);
      vm.sha256 = new Hashes.SHA256().hex(vm.textToCalculate);
      vm.sha512 = new Hashes.SHA512().hex(vm.textToCalculate);
      vm.rmd160 = new Hashes.RMD160().hex(vm.textToCalculate);
    }

    vm.clear = function () {
      vm.textToCalculate = "";
      vm.md5 = "";
      vm.sha1 = "";
      vm.sha256 = "";
      vm.sha512 = "";
      vm.rmd160 = "";
      disableCalulate = true;
      console.log('txt: ' + vm.textToCalculate);
    }


  });



