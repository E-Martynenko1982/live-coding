/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */

//map -input -callback output - array


function getStatuses(results) {
  //filter not valid elements
  //if length > 0 => not valid

  if (results.filter(el => el < 0 || el > 100).length > 0) {
    return null
  }

  if (results.some(el => el < 0 || el > 100)) {
    return null
  }


  const newArr = results.map(function (el, index, arr) {
    if (el >= 90) {
      return 'Passed'
    } else {
      return 'Failed'
    }
  })
  return newArr
  //return results.map(r => (r >= 90 ? 'Passed' : 'Failed'));
}


console.log(getStatuses([25, 40, 74, 58, 100, 5, -1]));
console.log(getStatuses([1000, 450]));
console.log(getStatuses([]));


// --------------------------------Reduce

