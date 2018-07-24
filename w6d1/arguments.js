function sum(...args) {
  let sum = 0;
  args.forEach( (el) => {
    sum += el;
  });
  return sum;
}

Function.prototype.myBind = function(name,...otherArgs) {
  return (...newArgs) => {
    this.apply(name,otherArgs.concat(...newArgs));
  };
};

function curriedSum(numArgs){
  let numbers = [];
  return function _curriedSum (el){
    numbers.push(el);
    if (numbers.length < numArgs){
      return _curriedSum;
    } else {
      return sum(...numbers);
    }
  };
}

const sum2 = curriedSum(4);
console.log(sum2(5)(30)(20)(1));

Function.prototype.curry = function(numArgs){
  let numbers = [];
  let that = this;
  return function _curry(el) {
    numbers.push(el);
    if (numbers.length < numArgs) {
      return _curry;
    } else {
      that(...numbers);
    }
  };
};

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let that = this;
  return function _curry(el) {
    numbers.push(el);
    if (numbers.length < numArgs) {
      return _curry;
    } else {
      that.apply(that, ...numbers);
    }
  };
};
