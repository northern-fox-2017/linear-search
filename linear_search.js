'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  let index = -1
  for (var i = 0; i < values.length; i++) {
    if(values[i] === target){
      index = i
      break;
    }
  }
  return index
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1
console.log(linearSearch(10, random_numbers));

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  let arr = []
  for (var i = 0; i < values.length; i++) {
    if (values[i] === target) {
      arr.push(i)
    }
  }
  return arr
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
