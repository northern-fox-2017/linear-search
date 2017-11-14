'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  for(let i = 0; i < values.length; i++){
    if(values[i]==target){
      return i
    }
  }
  return -1
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values, index = 0, result = []) => {
  //write your code here
  if( target == values[index] && index == values.length-1 ){
    result.push( index )
    return result
  }else if( target != values[index] && index == values.length-1 ) {
    return -1
  }else if( target == values[index] && index < values.length-1 ) {
    //console.log(index,'masuk');
    result.push( index )
    index += 1

    //console.log(result,'ini result')
    return globalLinearSearch(target, values, index, result)
  }else{
    index += 1
    return globalLinearSearch(target, values, index, result)
  }
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
