// TASK 1
// Refactor tripleNums to use a for...of loop instead of a basic for. https://devdocs.io/javascript/statements/for...of

function tripleNums(nums) {
  const tripledArr = [];
  for (const element of nums) {
    tripledArr.push(element * 3);
  }
  return tripledArr;
}

// TASK 2
// Refactor shoutNames to use the higher order function, map, instead of the for loop. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function shoutNames(names) {
  // shoutNames capitalises all the names and returns them in a new array.
  const shoutyArray = [];
  names.map((name) => {
    const upperCaseName = name.toUpperCase();
    shoutyArray.push(upperCaseName);
  });
  return shoutyArray;
}

// TASK 3
// Refactor isSweetEnough to use the higher order function, every. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function isSweetEnough(foodArray) {
  // isSweetEnough returns true if ALL foods are sweet.
  const isSweet = (currentValue) => currentValue.flavour === "sweet";

  return foodArray.every(isSweet);
}

// TASK 4
// Refactor getExcited to use a string method. Hint: Most of this code can be replaced with one method!

function getExcited(sentence) {
  // getExcited changes all full stops in a sentence to an exclamation mark!
  const replaced = sentence.replaceAll(".", "!");
  return replaced;
}

// TASK 5
// Refactor isShrekCharacter to use a higher order function and tidy up the code.

function isShrekCharacter(characters) {
  // isShrekCharacter receives an array of characters and *only* returns the characters from the Shrek franchise in a new array.

  const checkMovie = (character) => {
    return character.movie.includes("Shrek");
  };

  const shrekCharacters = characters.filter(checkMovie);

  return shrekCharacters;
}

// NOTE: Remember to remove any unused variables or console logs from the code. Refactoring is also about readability, ensure variables are clearly named!

// ---------- Do not change the code below this line --------------
module.exports = {
  isSweetEnough,
  shoutNames,
  isShrekCharacter,
  tripleNums,
  getExcited,
};
