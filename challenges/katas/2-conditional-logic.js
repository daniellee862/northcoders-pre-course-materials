// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function areValuesEqual(left, right) {
  // return true if the passed arguments are strictly equal

  //just use a simple ternary operator for this
  // if true return x, if not true return y
  return left === right ? true : false;
}

function areValuesNotEqual(left, right) {
  // return true if the passed arguments are NOT equal

  //similar ternary except instead of strict equality === it is !==
  return left !== right ? true : false;
}

//It has been a while since I have run a js file using the 'node command' cant figure out how to do it thus far,
//would have been handy to have console.log for this one
//not sure if I am in the wrong directory or need to add a script to package.json
function isFromThe60s(year) {
  // return true if the year is in the 1960'

  //num to string - split to array of substrings - slice first three digit - rejoin - then convert back to number
  //This isnt good for readability but it is possible to method chain like this.
  //This is basically declaring the 'digits' variable and assigning the first three digits of {year} to it
  let digits = year.toString().split("").slice(0, 3).join();
  //convert back to number use regex to remove commas
  const digitsNum = parseInt(digits.replace(/,/g, ""));

  // if digitsNum = 196 then year must be in the 60's
  if (digitsNum === 196) {
    return true;
  } else {
    return false;
  }
}

function isEvenLength(string) {
  // return true if string has an even length
  //fairly simple one, you can use .length and the modulo operator to find out if the length is odd or even
  return string.length % 2 === 0 ? true : false;
}

function areStringsEqualCaseInsensitive(left, right) {
  // return true if the passed strings are equal ignoring case
  //fairly simple one again

  return left.toLowerCase() === right.toLowerCase() ? true : false;
}

// ---------- Do not change the code below this line --------------
module.exports = {
  areValuesEqual,
  areValuesNotEqual,
  isFromThe60s,
  isEvenLength,
  areStringsEqualCaseInsensitive,
};
