// filter Applies to the entire products array. Each array element is checked to see if it matches the criteria in filterObj
// every method(in - element of array, out-true/false).If the key is price, checks whether the product price is less than or equal to the filter value. Для остальных ключей проверяет строгое равенство значений.
// If filterObj is empty, Object.keys(filterObj) will return an empty array, and every will always return true, so filter will return all elements of the original array

function filterProducts(products, filterObj) {
  return products.filter(product => {
    return Object.keys(filterObj).every(key => {
      if (key === 'price') {
        return product[key] <= filterObj[key];
      }
      return product[key] === filterObj[key];
    });
  });
}

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    city: 'New York',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 599.99,
    city: 'Los Angeles',
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Desk Chair',
    price: 89.99,
    city: 'Chicago',
    category: 'Furniture',
  },
  {
    id: 4,
    name: 'Coffee Maker',
    price: 49.99,
    city: 'Houston',
    category: 'Home Appliances',
  },
  {
    id: 5,
    name: 'Book',
    price: 19.99,
    city: 'New York',
    category: 'Books',
  },
  {
    id: 6,
    name: 'T-shirt',
    price: 14.99,
    city: 'Phoenix',
    category: 'Clothing',
  },
  {
    id: 7,
    name: 'Bicycle',
    price: 299.99,
    city: 'San Antonio',
    category: 'Sports',
  },
];

// examples
// #1
console.log(filterProducts(products, { city: 'New York', price: 50 })) 