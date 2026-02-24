/*
* Given an integer array arr and a mapping function fn, 
  return a new array with a transformation applied to each element.
* The returned array should be created such that returnedArray[i] = fn(arr[i], i).
* Please solve it without the built-in Array.map method.
*/

var map = function(arr,fn){
    var result = []
    for(let i = 0; i < arr.length; i++){
        result.push(fn(arr[i],i))
    }
    return result;
}

const fn = (n,i)=>  n + 1 
const main = map([1,2,3],fn)
console.log(main)

const fn1 = (n,i)=>  n * n 
const main1 = map([1,2,3],fn1)
console.log(main1)
