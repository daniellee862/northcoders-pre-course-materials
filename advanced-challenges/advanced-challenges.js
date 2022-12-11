function getEvenNumbers(nums) {
  /*
    This function takes an array of integers and returns an array containing only even integers
     */

  const checkNums = (num) => {
    if (num % 2 === 0) {
      return num;
      //testing
    }
  };

  const evenNumArr = nums.filter(checkNums);

  return evenNumArr;
}

function flipBooleans(bools) {
  /*
    This function takes an array of booleans and should return an array of the opposite booleans.
    E.g. [true, true, false] => [false, false, true]
  */

  const flippedBools = bools.map((bool) => {
    if (bool === true) {
      return false;
    }
    return true;
  });

  return flippedBools;
}

function translateKey(student, keyToChange, translation) {
  /*
    Northcoders is expanding to France 🎉🥖. 
    Unfortunately, our team on the ground in Paris doesn't speak the best English and has been providing us with student data partly in French. 
    This function will take an object representing a student's data, a key that needs changing, and its English translation.  
    E.g. 
    const student = {
      prénom: 'Carla',
      surname: 'Bruni',
      job: 'Artist'
    }
    const keyToChange = 'prénom'
    const translation = 'firstName'

    It returns a **new object** with the key successfully translated into English.
    E.g. 
    {
      firstName: 'Carla',
      surname: 'Bruni,
      job: 'Artist'
    }
  */

  student[translation] = student[keyToChange];

  delete student[keyToChange];

  const newObj = student;

  return newObj;
}

function findFirstDentist(people) {
  /*
    This function takes an array of people objects and returns the first found dentist object from the array.
  */
  let confirm = false;
  let person = {};

  for (let i = 0; i < people.length; i++) {
    if (people[i].isDentist === true) {
      confirm = true;
      person = people[i];
      break;
    }
  }

  return confirm ? person : null;
}

function tallyPeopleInManchester(people) {
  /* This function receives an array of people objects in for format:
    [
      { name: 'Emmeline', lives: { country: 'UK', city: 'Manchester' }, age: 32 }
    ]

    The function should return the number of people who live in the city of Manchester
  */

  let manchester = 0;

  people.map((person) => {
    if (person.lives.city === "Manchester") {
      manchester++;
    }
  });
  return manchester;
}

function getPugOwners(dogs) {
  /*
    This function takes an array of dog objects and returns an array of the names of all the pug owners.
    E.g. [
      {name: 'Beatrice', breed: 'Lurcher', owner: 'Tom'},
      {name: 'Max', breed: 'Pug', owner: 'Izzi'},
      {name: 'Poppy', breed: 'Pug', owner: 'Anat'}
    ]
    will return ['Izzi', 'Anat']
  */

  let owners = [];

  dogs.map((dog) => {
    if (dog.breed === "Pug") {
      owners.push(dog.owner);
    }
  });

  return owners;
}

function pluraliseKeys(obj) {
  /*
    In this function you will be provided with an object. That object is storing information on keys. 
    E.g. {
      name: 'Tom',
      job: ['writing katas', 'marking'],
      favouriteShop: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    };

    In some cases, however, the keys have been very badly named. Good naming convention tells us that the keys containing arrays should be named as plurals. 
    This function should return a **new object** that is a copy of the input but with any keys that contain arrays pluralised (an 's' added to the end.)
  
    
    E.g. {
      name: 'Tom',
      jobs: ['writing katas', 'marking'],
      favouriteShops: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
      ]
    }
  */

  //I need to iterate through the object keys
  for (const key in obj) {
    //check if the keys value is an array
    if (Array.isArray(key) === true) {
      //if array check the keys last letter
      if (key.charAt(key.length - 1) != "s") {
        //if it isnt s, add s to key name.
        key = key + "s";
      }
    }

    return obj;
  }
}

function getWordLengths(str) {
  /*
    This function takes a string and returns an array of the lengths of each word in the string.
    E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
  // declare variable and initialise with empty array
  // turn string into array of words
  // iterate through array and push each words length to empty Array
  // return new array

  let newArr = [];

  const wordArr = str.split(" ");

  wordArr.map((word) => {
    newArr.push(word.length);
  });

  return newArr;
}

function getPalindromes(words) {
  /*
    This function takes an array of words and returns an array containing only the palindromes.
    A palindrome is a word that is spelled the same way backwards.
    E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] =>  ['racecar', 'tacocat']
  */

  let palindromes = [];

  words.map((word) => {
    if (word === word.split("").reverse().join()) {
      palindromes.push(word);
    }
  });

  return palindromes;
}

function replaceLettersWithXs(str) {
  /* 
    This function will receive a string with a mix of characters. It should return the string with all letters replaced by dashes ('X').
    For example 'I love Greg' should return 'X XXXX XXXX', and 'Hard as 1, 2, 3' should return 'XXXX XX 1, 2, 3'.
  */
}

function validMobileNumber(num) {
  /*
    This function will receive the string of a mobile number. It should return true if the number is a valid UK number and false if not.
    A valid mobile number may begin with '07' followed by 9 more digits.
    It may also begin with '+447' followed by 9 more digits.
    It may also begin with '00447' followed by 9 more digits.
    Anything else is invalid.
  */
}

function sumDigitsFromString(str) {
  /*
    This function takes a string with a jumble of letters and numbers. It should add together all the numbers that appear in the string and return the total.
    E.g. 'foo5bar6cat1' => 12
    'foo99cat' => 18
    Tip: For this one, it might be useful to know that the value `NaN` in JavaScript behaves oddly. For example, if you do `typeof NaN` it tells you it's a `"number"`. Odd, eh?
  */

  //declare variable as total, initialise with 0
  // turn string into array
  //iterate through array
  //for each element ask; if this element turned into a number is the type of number
  //then add it to total
  //it is my understanding that if you try turn a letter into a number the conditional wont pass

  let total = 0;

  let arr = string.split("");

  arr.map((item) => {
    if (typeof parseInt(item) === "number") {
      total += item;
    }
  });

  return total;
}

function getWilliams(arr) {
  /*
    This function takes an array of full names and returns an array containing only the people whose last name is Williams.
    E.g. ['Charlotte Jones', 'Rebecca Williams', 'Harry Williams', 'John Williamson', 'William Jones'] => ['Rebecca Williams', 'Harry Williams']
  */

  //iterate over array, maybe use filter instead?
  //for each element create a sub-array
  // if the name at index 1 of subarray is williams push names to new array

  return arr.filter((item) => {
    item.split(" ")[1] === "williams";
  });
}

function getFactorials(nums) {
  /*
    This function takes an array of positive integers and returns an array of the factorials of these numbers.
    E.g. [4, 3, 2] => [24, 6, 2]

    The factorial of a number is the product of that number and all the integers below it.
    E.g. the factorial of 4 is 4 * 3 * 2 * 1 = 24
  */
  // let factArr = []
  // nums.map((num) => {
  //   let start =  num * (num - 1)
  //   for (let i = num ; i > 0; i--){
  //     let sum = 0
  //      factorial
  //   }
  // })
  //not sure on this one
}

function largestNumber(num) {
  /*
    This function takes a number and returns the largest number that can be made with the same digits.
    E.g. if num is 23, the function should return 32.
    E.g. if num is 9, the function should return 9.
    E.g. if num is 581 the function should return 851.
  */
  //take num and turn into an array of digits
  //sort array from largest to smallest
  //join array
  //return the number

  const arr = num.split("").map((item) => {
    return Number(item);
  });

  const sortArr = arr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });

  const sum = parseInt(sortArr);

  return sum;
}

function generateMatrix(n) {
  /*
    This function takes a number, n, and returns an n*n nested array populated with the value null.
    E.g. if n is 3, we want:
    [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  */
}

function findWrongWayFruit(orchard) {
  /*
    This array takes an array of fruit in the format:
    ['apple', 'apple', 'apple', 'apple', 'elppa', 'apple']

    The fruit will all be the 'right way round' apart from 1 fruit!
    Your function should return its index position. E.g. in this example, 4.
    NB The fruit will not always be apple but it will always be an orchard of the same kind of fruit.
  */
}

function pairDNA(dna) {
  /*
    This function takes a string of DNA such as 'GTCA' and returns an array containing correctly matched DNA pairs.
    E.g. 'GTTC' => ['GC', 'TA', 'TA', 'CG']
    If any nonsensical letters are passed as DNA they should be ignored.
    E.g. 'GYTC' => ['GC', 'TA', 'CG']
  */
}

function tallyHashtagsAndMentions(str) {
  /* 
    This function receives a string that will contain a number of mentions and hashtags as on Twitter.

    E.g. "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"

    The function should return an object describing the number of hashtags and mentions found:
    { hashtags: 2, mentions: 1 }
  */
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNumbers,
  flipBooleans,
  translateKey,
  findFirstDentist,
  tallyPeopleInManchester,
  getPugOwners,
  pluraliseKeys,
  getWordLengths,
  getPalindromes,
  replaceLettersWithXs,
  validMobileNumber,
  sumDigitsFromString,
  getWilliams,
  getFactorials,
  largestNumber,
  generateMatrix,
  findWrongWayFruit,
  pairDNA,
  tallyHashtagsAndMentions,
};
