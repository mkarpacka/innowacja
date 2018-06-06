'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:HistoriesCtrl
 * @description
 * # HistoriesCtrl
 * Controller of the nowaInnowacjaApp
 */




    
class Block
{

    constructor (date)	
    {
       this.date = date;
       this.hash = this.calculateHash();
       this.nonce = 0;
    }
    
    calculateHash()
    {
        return new Hashes.SHA256().hex(this.date + this.nonce)
    }
    
    mineBlock(difficulty)
    {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        
        console.log("Block mined: " + this.hash);
        console.log(this.nonce);
        return [this.hash, this.nonce];
    }
}




angular.module('nowaInnowacjaApp')
  .controller('HistoriesCtrl', function ($scope) {

    $scope.nonce;
    $scope.result;
    $scope.difficulties = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.difficulty = 0;
    $scope.date = new Date();

    $scope.findHashValue = function()
		{
      console.log("clicked")
      let myBlock = new Block($scope.date);
      let dataResult = myBlock.mineBlock($scope.difficulty);
      $scope.result = dataResult[0];
      $scope.nonce = dataResult[1];
    }






  });

