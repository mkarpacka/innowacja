'use strict';

/**
 * @ngdoc overview
 * @name innoApp
 * @description
 * # innoApp
 *
 * Main module of the application.
 */
angular
  .module('nowaInnowacjaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/blockchain', {
        templateUrl: 'views/blockchain.html',
        controller: 'BlockchainCtrl',
        controllerAs: 'blockchain'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
