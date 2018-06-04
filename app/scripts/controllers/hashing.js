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
  	$scope.textToCalculate;
    $scope.md5;;
    $scope.sha1;
    $scope.sha256;
    $scope.sha512;
    $scope.rmd160;


    window.onload = function() {
      document.getElementById("myText").focus();
  };



    $scope.calculate = function(textToCalculate)
		{
      $scope.md5 = new Hashes.MD5().hex($scope.textToCalculate);
      $scope.sha1 = new Hashes.SHA1().hex($scope.textToCalculate);
      $scope.sha256 = new Hashes.SHA256().hex($scope.textToCalculate);
      $scope.sha512 = new Hashes.SHA512().hex($scope.textToCalculate);
      $scope.rmd160 = new Hashes.RMD160().hex($scope.textToCalculate);   
    }

    $scope.clear = function()
    {
      $scope.textToCalculate = "";
      $scope.textToCalculate = "";
      $scope.md5 = "";
      $scope.sha1 = "";
      $scope.sha256 = "";
      $scope.sha512 = "";
      $scope.rmd160 = "";	
    }




  });



