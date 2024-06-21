// analog map method
// func: in-array, callback function, out-new array of elements wich chahged by callback argument
// callback: in-element of array, index of array, entireArray - link for all inner array 


const mapArrayElements = (arr, callback) => {
  // create empty arr
  const result = []
  // iterate elements of array apply loop for

  for (let index = 0; index < arr.length; index++) {
    // push generated new elements apply callback
    result.push(callback(arr[index], index, arr))

  }
  return result
};

console.log(mapArrayElements([2, 4, 6], el => el * 2)) // => [4, 8, 12]
console.log(mapArrayElements([2, 4, 6], el => el / 10)) // [0.2, 0.4, 0.6]
console.log(mapArrayElements([2, 4, 6], el => el + ' = result')) // ['2 = result', '4 = result', '6 = result']