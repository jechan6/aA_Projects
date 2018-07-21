const readline = require('readline');
const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.towers = [[1,2,3],[],[]];
  }

  promptMove(callback) {

    reader.question('which tower do you want to move from? (0,1,2): ', (towerFrom) => {
      reader.question('which tower do you want to move from? (0,1,2): ', (towerTo) => {
        console.log(`You want to move from tower ${towerFrom} to tower ${towerTo}.`);

        let from = parseInt(towerFrom);
        let to = parseInt(towerTo);

        callback(from, to);
      });
    });
  }

  isValidMove(towerFrom, towerTo){
    if ((towerFrom < 0 || towerFrom > 2) || (towerTo < 0 || towerTo > 2)){
      return false;
    } else if (this.towers[towerFrom].length === 0) {
      return false;
    } else if (this.towers[towerTo].length === 0) {
      return true;
    } else if (this.towers[towerFrom][0] < this.towers[towerTo][0]){
      return true;
    } else{
      return false;
    }
  }
  print() {
    this.towers.forEach( el => console.log(el));
  }
  isWon() {
    if (this.towers[1].length === 3 || this.towers[2].length === 3) {
      return true;
    }
    return false;
  }
  move(towerFrom, towerTo){
    if (this.isValidMove(towerFrom, towerTo) === true){
      this.towers[towerTo].unshift(this.towers[towerFrom].shift());
      return true;
    } else {
      return false;
    }
  }

  run(compeletionCallback) {
    if(!this.isWon()) {
      this.print();
      this.promptMove((from,to)=> {
        this.gameLogic(from, to,compeletionCallback);
      });
    } //ISWON
  }//end of run

  gameLogic(from, to,compeletionCallback) {
    if (this.move(from,to)) {
      if (this.isWon()) {

        compeletionCallback();
      } else {
        this.run();
      }

    } else {
      console.log("invalid move, try again");
      this.run();
    }
  }

} //End of class
//
// let a = new Game();
// a.run(()=>{
//   console.log(" YOU WON! ");
//   reader.close();
// });

function test(value, callback){
  console.log(callback);
  console.log(value);
  callback(value);
}

function fun(value){
  console.log(value*2);
}

function cray(value){
  console.log(value/2);
}

test(99, cray);
