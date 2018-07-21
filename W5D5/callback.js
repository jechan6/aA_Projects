

class Clock {
  constructor() {
    let date = new Date();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
  }

  printTime() {
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }

  _tick() {
    this.second++;
    this.printTime();
  }
}

const readline = require('readline');
const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, compeletionCallback) {
  if (numsLeft === 0) {
    compeletionCallback(sum);
  }
  if (numsLeft > 0) {
    reader.question('Input a number to add: ', function(num) {
      console.log(`You want to add ${num} to sum`);
      let input = parseInt(num);
      sum += input;
      console.log(`New sum is ${sum}`);
      addNumbers(sum, numsLeft-1, compeletionCallback);
    });
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps === true){
      //console.log(`in outer bubble sort loop ${madeAnySwaps}`);
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      return sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  // madeAnySwaps = false;
  if (i < arr.length - 1){
    console.log(arr);
    askIfGreaterThan(arr[i], arr[i+1], function(bool){
      if (bool === true) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  if (i === arr.length - 1){
    outerBubbleSortLoop(madeAnySwaps);
  }
}


function askIfGreaterThan(el1,el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}`, function(bool) {
    if (bool === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
  console.log("hello");
}
//
let madeAnySwaps = false;

let arr = [5,3,1,10,16,2];
absurdBubbleSort(arr, function(arr) {
  console.log(arr);
});

Function.prototype.myBind = function(context) {

  return () => {

    this.apply(context);
  };
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"



  //
  //
  //   if(!this.isWon()) {
  //     this.print();
  //     this.promptMove((from,to)=> {
  //       this.gameLogic(from, to);
  //     });
  //   } //ISWON
  // }//end of run
