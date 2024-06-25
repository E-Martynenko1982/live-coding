
// function addPropertyV1(obj, key, value) {

//  obj[key] = value;
//   return obj;
// }

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, {
    [key]: value
  })
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}


function addPropertyV4(obj, key, value) {

  return copyObj = { ...obj, [key]: value }
}


function addPropertyV5(obj, ...args) {
  const res = args.reduce((acc, el, index) => {
    if (index % 2 === 1) {
      return acc
    }
    return acc[el] = value
  })
  return res
}

const obj = { name: 'Tom', age: 17, email: 'google' }
const { name, ...args } = obj
console.log(obj)
