// Arays method
// callback
// filter in details

// 1. pop
// const numbersList1 = [1, 2, 3, 4, 5];
// console.log('Array before pop', numbersList1);

// input-none
// output: last element | undefined
// const res = numbersList1.pop();
// console.log(res)
// console.log('Array after pop', numbersList1)


/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

// const numbersList2 = [1, 2, 3, 4, 5];
// console.log('Array before pop', numbersList2);

// const res = numbersList2.push('hello')
// console.log('Array after pop', numbersList2)
// console.log(res)


/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

// const numbersList3 = [1, 2, 3, 4, 5];
// console.log('Array before pop', numbersList3);

// const res = numbersList3.shift()
// console.log('Array after pop', numbersList3)
// console.log(res)




/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// put your code here

// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций которые > 5
// массива anotherNumbersList
// выведи evenPositions в консоль

// put your code here
console.log('Array before filter', anotherNumbersList);
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

const filterCallback = (el) => {
  if (el > 5) {
    return true
  } else {
    return false
  }
};

const res4 = anotherNumbersList.filter(filterCallback);

const res41 = anotherNumbersList.filter(el => el > 5);


console.log('Array after filter', anotherNumbersList);