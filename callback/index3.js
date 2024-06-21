
// create empty arr
// iterate arr
// apply callback for each el
// if call
const filterArrayElements = (arr, callback) => {
  const res = []
  for (let index = 0; index < arr.length; index++) {
    if (callback(arr[index], index, arr)) {
      res.push(arr[index])
    }

  }
  return res
};

const test = [2, 5, 7, 8, 3]

console.log(filterArrayElements(test, el => el > 5))

