// take array of keys of first obj - method Object.keys
//  find key of this array wich have the same key in secondObj(method hasOwnProperty- return true if object have this property(key)-argument of hasOwnProperty). Find return first finded element which accord of parametrs of find
// if such key is find returns an object with this key and its value as a computed property
// if not find - returns empty obj
function objIntersection(firstObj, secondObj) {
  const obj = Object.keys(firstObj).find(key => secondObj.hasOwnProperty(key) && firstObj[key] === secondObj[key]);

  if (obj) {
    return { [obj]: firstObj[obj] };
  } else {
    return {};
  }

}










const obj1 = { id: 1, points: 2, signature: 'eeew' };
const obj2 = { width: 100, height: 200 };
console.log(objIntersection(obj1, obj2));


