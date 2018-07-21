
const readline = require('readline');
const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});


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
