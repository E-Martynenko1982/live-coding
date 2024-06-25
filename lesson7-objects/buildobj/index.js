function buildObject(keysList, valuesList) {
  // const obj = {};

  // for (let index = 0; index < keysList.length; index++) {
  //   const key = keysList[index];
  //   const value = valuesList[index];
  //   obj = { ...obj, [key]: value };
  // }

  return keysList.reduce((acc, key, index) => {

    acc[key] = valuesList[index];
    return acc;
  }, {})
  // return obj;
}
let keys = ['name', 'address', 'age'];
let values = ['Vasyl', 'Ukraine', 34];

console.log(buildObject(keys, values))

keys = ['auto', 'year', 'milage'];
values = ['BMW', 2012, 230000];

const result = buildObject(keys, values);
console.log(result)
