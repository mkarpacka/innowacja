'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:DemoCtrl
 * @description
 * # DemoCtrl
 * Controller of the nowaInnowacjaApp
 */
app.controller('DemoCtrl', function ($scope, blocks) {

  $scope.blocks = [];
  getBlocks();

  function getBlocks() {
    blocks.getAllBlocks().then(response => {
      if (response.status === 200) {
        //console.log(response);
        $scope.blocks = response.data.blocks;
      } else if (response.status === 500) {
        //internal server error
        console.log(response);
      } else if (response.status === 404) {
        //not found
        console.log(response);
      }
    });
  }

  $scope.addBlock = function () {
    blocks.addBlock($scope.blockContent).then(response => {
      if (response.status === 201) {
        $scope.blocks.push(response.data.block);
        $scope.blockContent = '';
      } else if (response.status === 500) {
        //error
        console.log(response);
      } else if(response.status === 409) {
        console.log("Nie mozna dodac dwa razy bloku z taka sama zawartoscia");
      }
    })
  }
});
