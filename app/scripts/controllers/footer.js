'use strict';
/*
    Trivial controller to control footer - display current date
*/
angular.module('nowaInnowacjaApp')
  .controller('FooterCtrl', function ($scope) {

    $scope.myDate = Date.now();
    
  });
  