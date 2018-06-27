'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nowaInnowacjaApp
 */

 //todo: not efficient implementation
angular.module('nowaInnowacjaApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.currentPizzaPrice;

    $http.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(function(response){
      let btcPrice = response.data.bpi.USD.rate;
        btcPrice = btcPrice.replace(/,/g,'');
        $scope.currentPizzaPrice =  btcPrice * 25;
       },
       function() {
        console.log("Exception in getting BTC price from API!");
        $scope.currentPizzaPrice = "nie wiem ile, ale pewnie dużo! :)";
    });
  });
