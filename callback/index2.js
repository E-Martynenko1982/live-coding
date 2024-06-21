// reduce input- callback output -anything
//callback-input: acc,el,index,array, output-new acc
function calcExpenses(transactions) {



  return Math.abs(transactions.reduce((acc, el) => (el < 0 ? acc + el : acc), 0))
}

// examples
console.log(calcExpenses([25, 40, -74, 58, -100, -5])) // returns ==> 179
console.log(calcExpenses([5000, 450])) // returns ==> 0