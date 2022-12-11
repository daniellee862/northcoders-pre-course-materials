// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function modulo(a, b) {
  return a % b;
}

function squareRoot(n) {
  //Declare root variable and assign temp num value
  let root = 0;

  //For loop increments from 0 to the value of n
  //each time checking if i is the square root of n
  for (let i = 0; i < n; i++) {
    if (i * i === n) {
      //if i multiplied by itself is equal to n
      // it is the square root of n
      // reassign the root variable's value as i
      root = i;
    }
  }
  return root;
}

function raiseToPower(m, n) {
  // return the result of raising m to the nth power

  //I think there is a problem with the test it says it expects 8 multiplied by itself zero times to be 1 (I thought it would be 8?)
  //So including a quick if check to pass that test
  if (n === 0) {
    return 1;
  }

  // So we want m mutlipled by itself n times;
  let power = m;
  //i will increment from one (not zero) to n and times power (m) by m , n times
  for (let i = 1; i < n; i++) {
    power *= m;
  }

  return power;
}

function formatMoney(amount) {
  /*
   * return a the amount formatted into pounds sterling
   * Amounts should be a string with the £ symbol in front
   * formatMoney(2.33) => "£2.33"
   * Amounts should be rounded to 2 decimal numbers
   * formatMoney(2.338) => "£2.34"
   * Amounts should always have 2 decimal numbers even if they are zeroes
   * formatMoney(1) => "£1.00"
   */

  //2 decimal place
  //I looked up the toFixed syntax
  let newAmount = amount.toFixed(2);

  //could return as template literal or just on one line but for readability I will declare a new variable
  const formattedAMount = "£" + newAmount;
  return formattedAMount;
}

function calculateCircleArea(r) {
  // return the area of a circle with radius r
  // round result to 3 decimal numbers

  //area is pi times radius square
  const area = Math.PI * (r * r);
  //rounded to three decimal whilst keeping num data type
  const areaToThreeDecimal = Number(area.toFixed(3));
  //returned
  return areaToThreeDecimal;
}

function calculateFullTurns(degrees) {
  // return the number of full turns you can make with the provided degrees
  // 1 full turn === 360 degrees

  //amount of turns
  const turns = degrees / 360;
  //full turns; rounds down to next int
  const fullTurns = Math.floor(turns);
  return fullTurns;
}

function findSmallestAndBiggest(arr) {
  // given an array, return a new array containing the smallest and biggest values of the original array.

  // could use Math.min/max but I will try sort the array numerically by using sort and passing a comparrison function
  //then return the first and last values from the sorted array.
  const sortedArr = arr.sort((a, b) => a - b);

  // new array, containing first and last value from sorted array
  const newArr = [sortedArr[0], sortedArr[sortedArr.length - 1]];

  return newArr;
}

function splitTheBeans(totalCost, numOfPeople) {
  /* 
  
  The Northcoders staff have gone for a coffee run and they are all bad at maths. 
  
  You are given the total cost of the coffee order (in pounds) and the number of people the cost needs to be split between.

  Return the cost per person.

  Note: The Northcoders staff only have whole pound coins. So the cost per person needs to be to the nearest pound coin (we'll give it as a tip!).

  */

  //divide cost between num of people
  let initialSplit = totalCost / numOfPeople;

  //return the initial split rounded up to the next int
  return Math.ceil(initialSplit);
}

// ---------- Do not change the code below this line --------------
module.exports = {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
  findSmallestAndBiggest,
  splitTheBeans,
};
