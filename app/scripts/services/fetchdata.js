'use strict';

/**
 * @ngdoc service
 * @name nowaInnowacjaApp.fetchData
 * @description
 * # fetchData
 * Service in the nowaInnowacjaApp.
 */
  app.provider('fetchData', function () {
    var API_URL = '';

    this.config = function (s) {
      API_URL = s;
    };

    this.$get = ['$http',  function ($http) {
      var fetchDataService = {};

        fetchDataService.getData = function(part){
            return $http.get(API_URL + '/texts/' + part);
        }
      
      return fetchDataService; 
    }];

  });