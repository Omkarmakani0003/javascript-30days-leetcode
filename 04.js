/*

* Write a function createCounter. It should accept an initial integer init. It should return an object 
  with three functions.

* The three functions are:
* increment() increases the current value by 1 and then returns it.
* decrement() reduces the current value by 1 and then returns it.
* reset() sets the current value to init and then returns it.

*/

var createCounter = function(init) { 
    var i = init
    let obj = {
        increment : function(){
            return i = i+1
        }, 
        decrement : function(){
            return i = i-1
        },
        reset : function(){
            return i = init
        }
    }  
    return obj;
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
console.log(counter.decrement()); //3
console.log(counter.decrement()); //2
console.log(counter.increment()); // 3
console.log(counter.reset()); // 5