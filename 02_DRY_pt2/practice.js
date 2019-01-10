/**
 * Problem 1: Filtering products
 * 
 * Build a function that if given the array of products I can search and filter based on a few options given
 * 
 * EX:
 * 
 * search(products, 'price', 'ascending') =>
 * 
 * [
 *  {
 *    name: 'plastic wayfarer',
 *    price: 30.99,
 *    sku: 1234323
 *  },
 *  
 *  {
 *    name: 'red wayfarer',
 *    price: 45.99,
 *    sku: 1234322
 *  },
 *  {
 *    name: 'green wayfarer',
 *    price: 50,
 *    sku: 1234321
 *  },
 *  {
 *    name: 'red aviator',
 *    price: 120.99,
 *    sku: 1234324
 *  }
 * ]
 * 
 * search(products, 'sku', 'ascending') =>
 * 
 * [
 *   {
 *     name: 'green wayfarer',
 *     price: 50,
 *     sku: 1234321
 *   },
 *   {
 *     name: 'red wayfarer',
 *     price: 45.99,
 *     sku: 1234322
 *   },
 *   {
 *     name: 'plastic wayfarer',
 *     price: 30.99,
 *     sku: 1234323
 *   },
 *   {
 *     name: 'red aviator',
 *     price: 120.99,
 *     sku: 1234324
 *   },
 * ]
 * 
 * search(products, 'name', 'ascending', 'wayfarer') => 
 * [
 *    {
 *      name: 'green wayfarer',
 *      price: 50,
 *      sku: 1234321
 *    },
 *    {
 *      name: 'plastic wayfarer',
 *      price: 30.99,
 *      sku: 1234323
 *    }
 *    {
 *      name: 'red wayfarer',
 *      price: 45.99,
 *      sku: 1234322
 *    }
 * ]
 * 
 * search(products, 'name', 'descending', 'red') => 
 * [
 *   {
 *     name: 'red wayfarer',
 *     price: 45.99,
 *     sku: 1234322
 *   },
 *   {
 *     name: 'red aviator',
 *     price: 120.99,
 *     sku: 1234324
 *   }
 * ]
 * 
 * 
 *    Your function should allow three options in the second parameter:
 *    - name, price, sku
 *    the third parameter should allow two options
 *    - ascending, descending (for 'name' this refers to alphabetical order)
 *    the fourth parameter is optional and is a keyword or number to filter by regarding the second parameter
 *    
 */

let products = [
  {
    name: 'green wayfarer',
    price: 50,
    sku: 1234321
  },
  {
    name: 'red wayfarer',
    price: 45.99,
    sku: 1234322
  },
  {
    name: 'plastic wayfarer',
    price: 30.99,
    sku: 1234323
  },
  {
    name: 'red aviator',
    price: 120.99,
    sku: 1234324
  },
]


/**
 * Guiding questions:
 *  - How can you use separation of concerns to approach a large problem like this?
 *  - How many functions should you expect to have roughly before you even begin solving this problem?
 */


/**
 * 1. New Array
 * 2. Loop through the original array
 * 3. Return new array after sorting based on the keyword and order
 * 4. 
 * 
 */


let products = [
  {
    name: 'green wayfarer',
    price: 50,
    sku: 1234321
  },
  {
    name: 'red wayfarer',
    price: 45.99,
    sku: 1234322
  },
  {
    name: 'plastic wayfarer',
    price: 30.99,
    sku: 1234323
  },
  {
    name: 'red aviator',
    price: 120.99,
    sku: 1234324
  },
]

const nameSort = (arr, order) => {
  if(order == 'descending') {
    return arr.sort((a, b) =>  ('' + b.name).localeCompare(a.name))
  } else {
  return arr.sort((a, b) => {
    return ('' + a.name).localeCompare(b.name);
})
  }
}

const numSort = (arr, keyword, order) => {
  if(order == 'ascending') {
      return arr.sort((a,b) => {
    return a[keyword] - b[keyword];
  })
  } else {
    return arr.sort((a,b) => {
    return b[keyword] - a[keyword];
  })
  }
}

const reducedSearch = (arr, keyword, srch) => {
  let reducedArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(typeof srch == 'string') {
      if(arr[i][keyword].includes(srch)) {
        reducedArr.push(arr[i]);
      }
    } else if (typeof srch == 'number') {
      if(arr[i][keyword] === srch) {
        reducedArr.push(arr[i])
      }
    }
  }
  return reducedArr;
}

const search = (arr, keyword, order, srch=null) => {
  if(srch != null) {
    arr = reducedSearch(arr, keyword, srch);
  }
  if(keyword == 'name') {
    return nameSort(arr, order);
  } else {
    return numSort(arr, keyword, order);
  }
}



console.log("Price, Ascending");
console.log(search(products, 'price', 'ascending'))
console.log("===============================");
console.log("Price, Ascending");
console.log(search(products, 'price', 'descending'))
console.log("===============================");
console.log("SKU, Ascending");
console.log(search(products, 'sku', 'ascending'))
console.log("===============================");
console.log("SKU, Ascending");
console.log(search(products, 'sku', 'descending'))
console.log("===============================");
console.log("Name, Ascending, wayfarer");
console.log(search(products, 'name', 'ascending', 'wayfarer'))
console.log("===============================");
console.log("Name, ascending", "red");
console.log(search(products, 'name', 'ascending', 'red'))
console.log("===============================");