// reduce input- callback output -anything
//callback-input: acc,el,index,array, output-new acc

function calcExpenses(transactions) {
  //   const res = transactions.reduce((acc, el, index) => {
  //     console.log('STEP' + index)
  //     console.log('acc' + acc)
  //     console.log('el' + el)
  //     if (el < 0) {
  //       acc += el
  //     }
  //   }, 0)

  // return Math.abs(res)
  return Math.abs(transactions.reduce((acc, el, index) => (el < 0 ? acc + el : acc), 0))


}

// examples
console.log(calcExpenses([25, 40, -74, 58, -100, -5])) // returns ==> 179
console.log(calcExpenses([5000, 450])) // returns ==> 0