'use strict';

/**
 * @ngdoc service
 * @name nowaInnowacjaApp.blocks
 * @description
 * # blocks
 * Service in the nowaInnowacjaApp.
 */
app.provider('blocks', function () {
  var API_URL = '';

  this.config = function (s) {
    API_URL = s;
  };

  this.$get = ['$http', function ($http) {
    var blocksService = {};

    blocksService.getBlocks = function () {
      return $http.get(API_URL + '/blocks');
    }

    blocksService.addBlock = function (content) {
      return $http.post(API_URL + '/blocks', {
        content: content
      });
    }

    return blocksService;
  }];
  f
});
