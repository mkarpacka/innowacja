'use strict';

/**
 * @ngdoc function
 * @name nowaInnowacjaApp.controller:HashPuzzleCtrl
 * @description
 * # HashPuzzleCtrl
 * Controller of the nowaInnowacjaApp
 */


//todo: calculate the hash using worker


let shouldStop = false;

class Block {

    constructor(date, additionalData) {
        this.date = date;
        this.additionalData = additionalData;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return new Hashes.SHA256().hex(this.additionalData + this.date + this.nonce)
    }

    mineBlock(difficulty) {





        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            if (shouldStop) {
                console.log("Mining stopped!!");
                shouldStop = false;
                //$scope.mining = false;
                break;
            }
            this.nonce += 1;
            this.hash = this.calculateHash();
        }


        console.log("Block mined: " + this.hash);
        console.log(this.nonce);
        return [this.hash, this.nonce];
    }
}




var app = angular.module('nowaInnowacjaApp')
    .controller('HashPuzzleCtrl', function ($scope) {


        $scope.nonce;
        $scope.result;
        $scope.difficulties = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        $scope.difficulty = 0;
        $scope.mining;
        $scope.date = new Date();


        // let worker = new Worker('scripts/worker.js');
        // worker.addEventListener('message', function(e) {
        //     console.log("I found, and it's " + e.data[0] + ' and ' + e.data[1]);
        //   });


        $scope.findHashValue = function () {

            // worker.postMessage($scope.data);

            console.log("findValue clicked!")
            let myBlock = new Block($scope.date, $scope.data);
            $scope.mining = true;
            let dataResult = myBlock.mineBlock($scope.difficulty);
            $scope.result = dataResult[0];
            $scope.nonce = dataResult[1];
            $scope.mining = false;

        }




    });



app.filter('boldZeros', function () {
    return function (x) {
        var i, c, txt = "";
        if (x) {
            for (i = 0; i < x.length; i++) {
                c = x[i];
                if (c === '0') {
                    c = c.bold();
                }
                else {
                    for (; i < x.length; i++)
                        txt += x[i];

                    return txt;
                }

                txt += c;

            }
            return txt;
        }
    };
});
