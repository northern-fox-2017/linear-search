'use strict'

// Release 0
console.log("Linear Search")
let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

function linearSearch(target, values) {
  for (let i = 0; i < values.length; i++) {
    if(target === values[i]) {
      return i;
    }
  }
  return -1
}

console.log(linearSearch(18, random_numbers)); // 2
console.log(linearSearch(9, random_numbers)); // -1
console.log(linearSearch(10, random_numbers)); // -1
console.log(linearSearch(37, random_numbers)); // -1


// Release 1
console.log("Global Linear Search")

function globalLinearSearch(target, values) {
  let arr = [];

  for(let i = 0 ; i < banana_arr.length ; i++) {
    if(target === banana_arr[i]) {
      arr.push(i);
    }
  }
  return arr;
}

let banana_arr = "banana".split(""); // ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr)); // [ 1, 3, 5 ]
console.log(globalLinearSearch("n", banana_arr)); // [2, 4]

module.exports = {
  linearSearch,
  globalLinearSearch
}
