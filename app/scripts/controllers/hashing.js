'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:HistoriesCtrl
 * @description
 * # HistoriesCtrl
 * Controller of the nowaInnowacjaApp
 */



angular.module('nowaInnowacjaApp')
  .controller('HashingCtrl', function ($scope) 
  {
  	$scope.textToCalculate = "";
   // $scope.output = "";
    $scope.md5 = "";
    $scope.sha1 = "";
    $scope.sha256 = "";
    $scope.sha512 = "";
    $scope.rmd160 = "";	


    $scope.calculate = function(textToCalculate)
		{
      $scope.md5 = new Hashes.MD5().hex(textToCalculate);
      $scope.sha1 = new Hashes.SHA1().hex(textToCalculate);
      $scope.sha256 = new Hashes.SHA256().hex(textToCalculate);
      $scope.sha512 = new Hashes.SHA512().hex(textToCalculate);
      $scope.rmd160 = new Hashes.RMD160().hex(textToCalculate);   
    }

   // var str = 'This is a sample text!'
    //var MD5 = new Hashes.MD5().hex(str) //zaimportowane w headzie z linku (do poprawy)
    

  	



  });



