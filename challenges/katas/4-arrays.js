// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getEvenNumbers(nums) {
  //return an array of only the even numbers in the given array
  let evenArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenArr.push(nums[i]);
    }
  }
  return evenArr;
}

function getItemsLongerThan(array, len) {
  //return an array of only the items longer than the given length
  let newArr = [];

  array.map((item) => {
    if (item.length > len) {
      newArr.push(item);
    }
  });

  return newArr;
}

function getLastItems(array, n) {
  // return an array with the 'n' last items of 'array'
  return array.slice(-n);
}

function getSandwichFilling(sandwich) {
  // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich

  //Im not keen on using this way, If I get time I will explore other succint methods
  const breadOne = sandwich.shift();
  const breadTwo = sandwich.pop();
  return sandwich;
}

function removeItem(array, n) {
  // return a new array without the item on position 'n', effectively removing it from the array

  const halfOne = array.slice(0, n);

  const halfTwo = array.slice(n + 1);

  const copyArr = halfOne.concat(halfTwo);

  return copyArr;
}

function mergeArrays(arr1, arr2) {
  // return a new array with all the elements of arr1 followed by all the elements of arr2
  //use spread operator syntax
  return [...arr1, ...arr2];
}

function flattenArrayByOne(arrayOfArrays) {
  /* given a nested array or arrays, return a new array with one less level of nesting. All the elements of all the original nested arrays must be kept in their original order
  for example: [[1],[2],[[3,4]]] => [1,2,[3,4]]
  */

  //Northcoders tutor showed me this in my entry test
  return arrayOfArrays.flat();
}

function isItemOmnipresent(arrayOfArrays, item) {
  // return true if the passed item is present in all the arrays inside arrayOfArrays

  let boolean = true;
  //as soon as a nested array doesnt include the item, the returned value will be set to false
  arrayOfArrays.map((array) => {
    if (!array.includes(item)) {
      boolean = false;
    }
  });
  return boolean;
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNumbers,
  getItemsLongerThan,
  getLastItems,
  getSandwichFilling,
  removeItem,
  mergeArrays,
  flattenArrayByOne,
  isItemOmnipresent,
};
