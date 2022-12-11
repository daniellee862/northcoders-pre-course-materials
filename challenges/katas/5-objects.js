// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function isOver40(user) {
  /*
    This function takes a user object with a property of age. It should return true if the user is over 40 and false if the user is 40 or younger.
    */

  return user.age > 40 ? true : false;
}

function getUserAge(user) {
  // return the user's age as a number.
  // you can assume that the passed user will always have a 'yearOfBirth' property.
  const age = 2022 - user.yearOfBirth;
  return age;
}

function getUserPetAge(user) {
  /*  The argument user will be an object. The object is nested; there are objects paired to keys on the user object. It will be in this format:
      {
        name: "Tom",
        age: 26,
        pet: {
          name: "Barney",
          age: 6,
          type: "good boy"
        }
      };
      This function should access the age property in the nested pet object and return the value
  */

  return user.pet.age;
}

function createProduct() {
  /*
    This function should return an object with a type property and a price property. The value for type can be any string, and the value for price should be a number.
  */

  return {
    type: "house",
    price: 2,
  };
}

function addPriceToProduct(product, price) {
  /* The argument product will be an object that looks like this:
    { type: 'Tofu slices' }
    Add a price property to this object and set its value to the price passed in as an argument. Then return the object.
    */
  product.price = price;
  return product;
}

function getPropertyOfProduct(product, property) {
  /* The argument product will be an object that looks like this:
    { type: 'Easy-peeler satsumas', price: '£1.09', quantity: 8 }
    Given a 'property' as an argument, return the value associated with that 'property'. 
    E.g. if asked for the price 'property' of the above satsumas object, your function would return '£1.09'.
  */

  return product[property];
}

function addPropertyToProduct(product, property, value) {
  /* The argument 'product' will be an object that looks like this:
    { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1 }
    Given a 'property' as an argument, as well as its corresponding value, update the 'product' to include this new information. Then return the updated 'product'.
    E.g. if given the 'property' 'length' and the value '2h 36m' (yes it really is that long) 
    your function should return { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1, length: '2h 36m' }
  */
  product[property] = value;
  return product;
}

function createNorthcoder(name, yearOfBirth) {
  // return an object with:
  // a name property set to the value of the name parameter
  // an age property set to whatever the age of the northcoder would be in the year 2022
  // a language property set to 'JavaScript'

  const age = 2022 - yearOfBirth;

  return {
    name: name,
    age: age,
    language: "JavaScript",
  };
}

function updateVoterAddress(voter, correctHouseNumber) {
  /* Uh-Oh! We've got some silly voters who've registered their addresses incorrectly. Lets help them fix those typos by changing their houseNumber to the correctHouseNumber. The user object looks like this:
    {
      name: "Alex",
      age: 39,
      address: { 
        houseNumber: 2, 
        street: "Old St", 
        city: "Chester" 
      }
    };
    Note - The function does NOT need to return anything.
  */
  voter.address.houseNumber = correctHouseNumber;
}

function createUserString(userObj) {
  // should take as an argument an object with the format from createNorthcoder
  // returns a string with the user's details in the form:
  // 'name: Mitch, age: 27, language: Javascript';
  // Note - this is a good use case of string template literals.

  return `name: ${userObj.name}, age: ${userObj.age}, language: ${userObj.language}`;
}

function getNorthcodersNames(northcoders) {
  // should take an array of objects with the format from createNorthcoder
  // returns an array of the users' names as strings
  let usernameArr = [];
  northcoders.map((user) => {
    usernameArr.push(user.name);
  });
  return usernameArr;
}

function getAlbumProperties(obj) {
  // should take an object with information about an album
  // should return an array containing all of the object's keys
  // E.g. {a: 'foo', b: 'car', c: 'bar'} should return ['a', 'b', 'c']

  return Object.keys(obj);
}

function deleteManyPasswords(users) {
  /*
    This function take an array of user objects and deletes the password key value pair on each user object.
    E.g.
    [
      {name: 'Barry', password: 'ilovetea'},
      {name: 'Sandeep', password: 'ilovecoffee'},
      {name: 'Kavita', password: 'ilovepie'}
    ]
    Returns:
    [
      {name: 'Barry' },
      {name: 'Sandeep'},
      {name: 'Kavita'}
    ]
    */

  users.map((user) => {
    delete user.password;
  });

  return users;
}

function countTheObjects(arr) {
  /*
    This function takes an array of different data types. It should return a count of the number of objects in the array.
    NB, think carefully about how to test if something is an object! Arrays are technically types of objects in JavaScript, as is the value null. However these should not be counted.
    */
  let count = 0;
  //1.value type of object - typeof variable === 'object' .
  //2.value is not null - variable !== null .
  //3.value is not an array - ! Array. isArray(variable) .
  //4 If all pass, the value is an object.
  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] === "object" &&
      arr[i] !== null &&
      !Array.isArray(arr[i])
    ) {
      count += 1;
    }
  }

  return count;
}

// ---------- Do not change the code below this line --------------
module.exports = {
  isOver40,
  getUserAge,
  getUserPetAge,
  createProduct,
  addPriceToProduct,
  getPropertyOfProduct,
  addPropertyToProduct,
  createNorthcoder,
  updateVoterAddress,
  createUserString,
  getNorthcodersNames,
  getAlbumProperties,
  deleteManyPasswords,
  countTheObjects,
};
