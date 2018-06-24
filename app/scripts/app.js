'use strict';

/**
 * @ngdoc overview
 * @name innoApp
 * @description
 * # innoApp
 *
 * Main module of the application.
 */

 
var app = angular
  .module('nowaInnowacjaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider, fetchDataProvider, blocksProvider) {
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
      .when('/basics', {
        templateUrl: 'views/basics.html',
        controller: 'BasicsCtrl',
        controllerAs: 'basics'
      })
      .when('/hashPuzzle', {
        templateUrl: 'views/hashPuzzle.html',
        controller: 'HashPuzzleCtrl',
        controllerAs: 'hashPuzzle'
      })
      .when('/hashing', {
        templateUrl: 'views/hashing.html',
        controller: 'HashingCtrl',
        controllerAs: 'hashing'
      })
      .when('/identification', {
        templateUrl: 'views/identification.html',
        controller: 'IdentificationCtrl',
        controllerAs: 'identification'
      })
      .when('/authorization', {
        templateUrl: 'views/authorization.html',
        controller: 'AuthorizationCtrl',
        controllerAs: 'authorization'
      })
      .when('/rebase', {
        templateUrl: 'views/rebase.html',
        controller: 'RebaseCtrl',
        controllerAs: 'rebase'
      })
      .when('/proofOfWork', {
        templateUrl: 'views/proofofwork.html',
        controller: 'ProofofworkCtrl',
        controllerAs: 'proofOfWork'
      })
      .when('/comparing', {
        templateUrl: 'views/comparing.html',
        controller: 'ComparingCtrl',
        controllerAs: 'comparing'
      })
      .when('/choosingHistory', {
        templateUrl: 'views/choosinghistory.html',
        controller: 'ChoosinghistoryCtrl',
        controllerAs: 'choosingHistory'
      })
      .when('/payingForIntegrity', {
        templateUrl: 'views/payingforintegrity.html',
        controller: 'PayingforintegrityCtrl',
        controllerAs: 'payingForIntegrity'
      })
      .when('/demo', {
        templateUrl: 'views/demo.html',
        controller: 'DemoCtrl',
        controllerAs: 'demo'
      })
      .when('/restrictions', {
        templateUrl: 'views/restrictions.html',
        controller: 'RestrictionsCtrl',
        controllerAs: 'restrictions'
      })
      .otherwise({
        redirectTo: '/'
      });

      fetchDataProvider.config('https://calm-chamber-63512.herokuapp.com'); //konfiguracja url api
      blocksProvider.config('https://calm-chamber-63512.herokuapp.com');
  });

