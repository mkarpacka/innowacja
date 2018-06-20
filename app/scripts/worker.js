
// class Block {

//     constructor(date) {
//         this.date = date;
//         this.hash = this.calculateHash();
//         this.nonce = 0;
//     }

//     calculateHash() {
//         return new Hashes.SHA256().hex(this.date + this.nonce)
//     }

//     mineBlock(difficulty) {
//         //mining = true;


//         while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
//             // if(shouldStop)
//             // {
//             //     console.log("Mining stopped!!");
//             //      shouldStop = false;
//             //      //$scope.mining = false;
//             //     break;
//             // }
//             this.nonce += 1;
//             this.hash = this.calculateHash();
//         }

//         //  for(this.nonce = 0; this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0") &&  )
//         // mining = false;
//         console.log("Block mined: " + this.hash);
//         console.log(this.nonce);
//         //$scope.mining = false;
//         return [this.hash, this.nonce];
//     }
// }


self.addEventListener('message', function (e) {


    self.importScripts('/bower_components/jshashes/hashes.js');
    console.log("I'm in");

    var date = e.data;


    let myBlock = new Block(e.data);
    let dataResult = myBlock.mineBlock(1);


    //let dataResult = [0, 1];
    console.log('result in eventlistener: ' + dataResult);

    self.postMessage(dataResult);


    //self.close();
});
