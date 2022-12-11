const {
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
} = require('../challenges/katas/5-objects');

describe('isOver40', function () {
  it('returns true if the user is over 40', function () {
    expect(isOver40({ age: 55 })).toBe(true);
    expect(isOver40({ age: 41 })).toBe(true);
    expect(isOver40({ age: 107 })).toBe(true);
    expect(isOver40({ age: 999 })).toBe(true);
  });
  it('returns false if the user is 40 or younger', function () {
    expect(isOver40({ age: 40 })).toBe(false);
    expect(isOver40({ age: 4 })).toBe(false);
    expect(isOver40({ age: 10 })).toBe(false);
    expect(isOver40({ age: 29 })).toBe(false);
  });
  it('ignores other properties', () => {
    expect(isOver40({ age: 4, favouriteNumber: 60 })).toBe(false);
  });
});

describe('getUserAge', () => {
  it('returns the age of the passed user based on its yearOfBirth property', () => {
    const currentYear = new Date().getFullYear();
    const user = {
      yearOfBirth: 1989,
    };
    expect(getUserAge(user)).toEqual(currentYear - 1989);
  });
});

describe('getUserPetAge', () => {
  it("returns the age of the user's pet", () => {
    const tom = {
      name: 'Tom',
      age: 26,
      pet: { name: 'Barney', age: 6, type: 'good boy' },
    };
    const paul = {
      name: 'Paul',
      age: 29,
      pet: { name: 'Dave', age: 13, type: 'cat' },
    };
    expect(getUserPetAge(tom)).toEqual(6);
    expect(getUserPetAge(paul)).toEqual(13);
  });
});

describe('createProduct', function () {
  it('should create the expected product', function () {
    expect(createProduct()).toHaveProperty('type');
    expect(createProduct()).toHaveProperty('price');
    expect(typeof createProduct().price).toBe('number');
    expect(typeof createProduct().type).toBe('string');
  });
});

describe('addPriceToProduct', () => {
  it('adds a price property to the passed product set to the passed price', () => {
    const product = {
      type: 'Tofu slices',
    };
    let newProduct = addPriceToProduct(product, 1.25);
    expect(newProduct).toEqual({ type: 'Tofu slices', price: 1.25 });
    expect(product.price).toEqual(1.25);
    delete product.price;
    expect(product).toEqual({ type: 'Tofu slices' });
    newProduct = addPriceToProduct(product, 1.35);
    expect(newProduct).toEqual({ type: 'Tofu slices', price: 1.35 });
    expect(product.price).toEqual(1.35);
  });
});

describe('getPropertyOfProduct', () => {
  it('returns the value associated with the property on the product', () => {
    const satsumas = {
      type: 'Easy-peeler satsumas',
      price: '£1.09',
      quantity: 8,
    };
    expect(getPropertyOfProduct(satsumas, 'price')).toEqual('£1.09');
    expect(getPropertyOfProduct(satsumas, 'quantity')).toEqual(8);
    expect(getPropertyOfProduct(satsumas, 'type')).toEqual(
      'Easy-peeler satsumas',
    );
  });
  it('returns the value associated with the property on the product', () => {
    const springGreens = {
      type: 'Crisp spring greens',
      price: '£0.79',
      quantity: 1,
    };
    expect(getPropertyOfProduct(springGreens, 'price')).toEqual('£0.79');
    expect(getPropertyOfProduct(springGreens, 'quantity')).toEqual(1);
    expect(getPropertyOfProduct(springGreens, 'type')).toEqual(
      'Crisp spring greens',
    );
  });
});

describe('addPropertyToProduct', () => {
  it('return an updated product object with a new property and value', () => {
    const dvd = {
      type: 'Terminator 2: Judgement Day',
      price: '£6.99',
      quantity: 1,
    };
    expect(addPropertyToProduct(dvd, 'length', '2h 36m')).toEqual({
      type: 'Terminator 2: Judgement Day',
      price: '£6.99',
      quantity: 1,
      length: '2h 36m',
    });
    expect(
      addPropertyToProduct(dvd, 'cast', [
        'Arnold Schwarzenegger',
        'Linda Hamilton',
        'Robert Patrick',
        'Edward Furlong',
      ]),
    ).toEqual({
      type: 'Terminator 2: Judgement Day',
      price: '£6.99',
      quantity: 1,
      length: '2h 36m',
      cast: [
        'Arnold Schwarzenegger',
        'Linda Hamilton',
        'Robert Patrick',
        'Edward Furlong',
      ],
    });
  });
});

describe('createNorthcoder', () => {
  it("returns an object with a 'name' property set to the passed name argument", () => {
    let northcoder = createNorthcoder('Hev');
    expect(northcoder).hasOwnProperty('name');
    expect(northcoder.name).toEqual('Hev');

    northcoder = createNorthcoder('Rayhaan');
    expect(northcoder).hasOwnProperty('name');
    expect(northcoder.name).toEqual('Rayhaan');
  });
  it("returns an object with an 'age' property set to the user's age in the year 2022 according to the passed yearOfBirth argument", () => {
    let northcoder = createNorthcoder('Verity', 1987);
    expect(northcoder).hasOwnProperty('age');
    expect(northcoder.age).toEqual(35);

    northcoder = createNorthcoder('Cat', 1985);
    expect(northcoder).hasOwnProperty('age');
    expect(northcoder.age).toEqual(37);
  });
  it("returns an object with a 'language' property set to JavaScript", () => {
    const northcoder = createNorthcoder('August', 1992);
    expect(northcoder).hasOwnProperty('language');
    expect(northcoder.language).toEqual('JavaScript');
  });
});

describe('updateVoterAddress', () => {
  it("changes the voter's house number", () => {
    const mitch = {
      name: 'Mitch',
      age: 27,
      address: { houseNumber: 61, street: 'Bushwood Rd', city: 'Manchester' },
    };
    const alex = {
      name: 'Alex',
      age: 39,
      address: { houseNumber: 2, street: 'Old St', city: 'Chester' },
    };
    updateVoterAddress(mitch, 10);
    updateVoterAddress(alex, 23);
    expect(mitch.address.houseNumber).toEqual(10);
    expect(alex.address.houseNumber).toEqual(23);
  });
});

describe('createUserString', () => {
  it('returns a string containing "name : <user\'s name>"', () => {
    const chipie = { name: 'Chipie', age: 27, language: 'Javascript' };
    const actual = createUserString(chipie);
    expect(actual.includes('name: Chipie')).toBe(true);
  });
  it('returns a string containing "age : <user\'s age>"', () => {
    const chipie = { name: 'Chipie', age: 27, language: 'Javascript' };
    const actual = createUserString(chipie);
    expect(actual.includes('age: 27')).toBe(true);
  });
  it('returns a string containing "language : <user\'s language>"', () => {
    const chipie = { name: 'Chipie', age: 27, language: 'Javascript' };
    const actual = createUserString(chipie);
    expect(actual.includes('language: Javascript')).toBe(true);
  });
  it("returns a whole string with all of the user's details", () => {
    const chipie = { name: 'Chipie', age: 27, language: 'Javascript' };
    let actual = createUserString(chipie);
    expect(actual).toBe('name: Chipie, age: 27, language: Javascript');

    const ant = { name: 'Ant', age: 28, language: 'Java' };
    actual = createUserString(ant);
    expect(actual).toBe('name: Ant, age: 28, language: Java');
  });
});

describe('getNorthcodersNames', () => {
  it('returns an empty array when given an empty list of northcoders', () => {
    const northcoders = [];
    const actual = getNorthcodersNames(northcoders);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  it('returns an array of one name when given a list containing only one northcoder', () => {
    const northcoders = [{ name: 'Mitch', age: 27, language: 'Javascript' }];
    const actual = getNorthcodersNames(northcoders);
    const expected = ['Mitch'];
    expect(actual).toEqual(expected);
  });
  it('returns all the names of all the northcoders', () => {
    const northcoders = [
      { name: 'Alex', age: 29, language: 'Javascript' },
      { name: 'Rose', age: 32, language: 'Java' },
      { name: 'Jade', age: 27, language: 'C' },
      { name: 'Dom', age: 28, language: 'Ruby' },
    ];
    const actual = getNorthcodersNames(northcoders);
    const expected = ['Alex', 'Rose', 'Jade', 'Dom'];
    expect(actual).toEqual(expected);
  });
});

describe('getAlbumProperties', () => {
  it("returns an array of the album's keys", () => {
    const input = {
      title: 'Pablo Honey',
      yearReleased: 1993,
      producer: 'Nigel Godrich',
    };
    const actual = getAlbumProperties(input);
    const expected = ['title', 'yearReleased', 'producer'];
    expect(actual).toEqual(expected);
  });
  it("returns an array of a different album's keys", () => {
    const input = {
      title: 'Needle Paw',
      yearReleased: 2017,
      artist: 'Nai Palm',
      copyright: 'Sony Music Entertainment',
      producers: ['Nai Palm', 'Nick Hererra', 'Phil Noy'],
    };
    const actual = getAlbumProperties(input);
    const expected = [
      'title',
      'yearReleased',
      'artist',
      'copyright',
      'producers',
    ];
    expect(actual).toEqual(expected);
  });
});

describe('deleteManyPasswords', function () {
  it('deletes the password key value pair on every object in an array of createUserString', function () {
    expect(
      deleteManyPasswords([
        { name: 'Barry', password: 'ilovetea' },
        { name: 'Sandeep', password: 'ilovecoffee' },
        { name: 'Kavita', password: 'ilovepie' },
      ]),
    ).toEqual([{ name: 'Barry' }, { name: 'Sandeep' }, { name: 'Kavita' }]);
    expect(
      deleteManyPasswords([
        { name: 'Carmen', password: 'ilovetea' },
        { name: 'Lisa', password: 'ilovepie' },
      ]),
    ).toEqual([{ name: 'Carmen' }, { name: 'Lisa' }]);
  });
});

describe('countTheObjects', function () {
  it('returns the count of objects inside an array of random data types', function () {
    expect(countTheObjects([])).toEqual(0);
    expect(countTheObjects([1, 3, 4, 5])).toEqual(0);
    expect(countTheObjects([1, 3, 4, 5, 'foo'])).toEqual(0);
    expect(countTheObjects([1, 3, 4, 5, {}, {}, {}, 'foo'])).toEqual(3);
    expect(countTheObjects([1, [], 3, 4, 5, {}, {}, {}, 'foo'])).toEqual(3);
    expect(countTheObjects([1, [], null, 3, 4, 5, {}, {}, {}, 'foo'])).toEqual(
      3,
    );
    expect(
      countTheObjects([
        1,
        {},
        [],
        null,
        null,
        'foo',
        3,
        4,
        5,
        {},
        {},
        {},
        'foo',
      ]),
    ).toEqual(4);
  });
});
