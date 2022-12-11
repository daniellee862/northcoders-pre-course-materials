// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getLength(str) {
  // return the length of the passed string

  const length = str.length;

  return length;
}

function putNamesTogether(firstName, lastName) {
  // return the first and last names with a space between them

  return firstName + " " + lastName;
}

function capitaliseString(str) {
  // return the passed string with its first letter capitalised

  //first letter capitalised plus the original str minus the first letter
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function dontShoutSentence(SENTENCE) {
  // return the passed sentence (IN ALL CAPS) in lower case
  // keep the first character capitalised
  const lowercase = SENTENCE.toLowerCase();
  // same logic as last kata as second step
  return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
}

function getMiddle(str) {
  // return the middle (or middle two) character(s) of the passed string

  //I need an index and a length value
  let index = 0;
  let length = 0;

  //if statement to check if the length is even or odd
  //if odd, index is length / 2 and just the one char
  //if even, index is length / 2 minus 1 to account for extra char
  if (str.length % 2 === 1) {
    index = str.length / 2;
    length = 1;
  } else {
    index = str.length / 2 - 1;
    length = 2;
  }

  //declare new variable and assign the value of string sliced with the params of position and length
  const middle = str.slice(index, index + length);
  return middle;
}

function getLastWord(words) {
  // return the last word of a sentence
  // you can assume words doesn't have a period at the end

  //for this im just going to try split the sentence into an array of words
  //then return the word at .length - 1 , because of zero indexed array.
  const wordsArr = words.split(" ");
  return wordsArr[wordsArr.length - 1];
}

function hyphenateWords(words) {
  // return the passed string with the spaces replaced by hyphens ("-")

  //I completed a regex section in FCC DSA. \s+ matches multiple whitespaces chars
  //g modifier means global and ensures all spaces are replaced not just the first
  return words.replace(/\s+/g, "-");
}

function convertToCamelCase(words) {
  // convert the passed string of space-separated words to camel case
  // camel case looks like this --> camelCaseLooksLikeThis

  //I will split to an array and then map through capitlising the first char of each word
  const arr = words.split(" ");
  const camelArr = arr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  //join array to a string wth no spaces or commas
  const camelstr = camelArr.join("");
  //first letter to lowercase
  const camelCase = camelstr.charAt(0).toLowerCase() + camelstr.slice(1);
  return camelCase;
}

function passwordValidation(password) {
  /*

  Northcoders takes security very seriously. We have a VERY robust password criteria. 

  Any password must include 'n' and 'c' (upper or lowercase) and must end with '1'.
  
  You need to design this function to check the password it is passed. If it fits all of the above criteria then you should return 'valid' else return 'invalid'.

*/

  //regex for n and c, I will test for '1' in the if statement
  //I need to revisit regex syntax because these regular expressions dont need to be seperate
  const regex = /n/i; // i case insensitive
  const regexTwo = /c/i;
  // return regex.test(password);
  // return password[password.length - 1];

  if (
    regex.test(password) &&
    regexTwo.test(password) &&
    password[password.length - 1] === "1"
  ) {
    return "valid";
  } else {
    return "invalid";
  }
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  passwordValidation,
};
