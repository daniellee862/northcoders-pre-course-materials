const {
  getFirstItem,
  splitString,
  addBread,
  countTheChars,
  addGuestsToParty,
} = require('../problem-solving/errors');

describe('getFirstItem', () => {
  it('returns first item in the array', () => {
    expect(getFirstItem([1, 2, 3, 4])).toEqual(1);
    expect(getFirstItem(['black', 'khaki', 'cyan'])).toEqual('black');
  });
});

describe('splitString', () => {
  it('returns a string as individual letters in an array', () => {
    expect(splitString('string')).toEqual(['s', 't', 'r', 'i', 'n', 'g']);
    expect(splitString('help')).toEqual(['h', 'e', 'l', 'p']);
    expect(splitString('northcoders')).toEqual([
      'n',
      'o',
      'r',
      't',
      'h',
      'c',
      'o',
      'd',
      'e',
      'r',
      's',
    ]);
  });
});

describe('addBread', () => {
  it('returns Vel object with favourite bread added', () => {
    const Vel = { name: 'Vel' };
    const expected = { name: 'Vel', faveBread: 'sourdough' };
    expect(addBread(Vel, 'sourdough')).toEqual(expected);
  });
  it('returns Paul object with favourite bread added', () => {
    const Paul = { name: 'Paul' };
    const expected = { name: 'Paul', faveBread: 'tiger loaf' };
    expect(addBread(Paul, 'tiger loaf')).toEqual(expected);
  });
});

describe('countTheChars', () => {
  it('returns 0 if no match occurs', () => {
    let array = [];
    expect(countTheChars(array, 'a')).toBe(0);
    array = ['a', 'b', 'c'];
    expect(countTheChars(array, 'd')).toBe(0);
  });
  it('returns total occurrences of the char in the array', () => {
    let array = ['a', 'b', 'c'];
    expect(countTheChars(array, 'a')).toBe(1);
    array = ['4', '6', 'hello', '2', '6', '6'];
    expect(countTheChars(array, '6')).toBe(3);
  });
  it('returns total occurrences of the char in a mixed type array', () => {
    let array = ['a', 1, 'b', 2, 'c', 3];
    expect(countTheChars(array, 'b')).toBe(1);
    array = ['1', 'a', 2, '2', 'b', 1, 'a', '1', '2', 'c', 3, '2', 2];
    expect(countTheChars(array, '2')).toBe(3);
    expect(countTheChars(array, 1)).toBe(1);
  });
});

describe('addGuestsToParty', () => {
  it('should return an array', () => {
    expect(Array.isArray(addGuestsToParty([]))).toEqual(true);
  });
  it('returns guests array unchanged if passed in an empty array', () => {
    expect(addGuestsToParty([])).toEqual([{ name: 'Rose' }, { name: 'Eli' }]);
  });
  it('returns guests array unchanged if no person in peopleArray has a value of yes for RSVP', () => {
    const peopleArray = [
      { name: 'Philippa', RSVP: 'no' },
      { name: 'Doug', RSVP: 'no' },
    ];
    expect(addGuestsToParty(peopleArray)).toEqual([
      { name: 'Rose' },
      { name: 'Eli' },
    ]);
  });
  it('returns guests array with added people from peopleArray if they all have a RSVP value of yes', () => {
    const peopleArray = [
      { name: 'Liam', RSVP: 'yes' },
      { name: 'Haz', RSVP: 'yes' },
    ];
    expect(addGuestsToParty(peopleArray)).toEqual([
      { name: 'Rose' },
      { name: 'Eli' },
      { name: 'Liam' },
      { name: 'Haz' },
    ]);
  });
  it('returns guests array with added people from peopleArray who have a value of yes for RSVP within a mixed array', () => {
    const peopleArray = [
      { name: 'Sarah', RSVP: 'yes' },
      { name: 'Jim', RSVP: 'no' },
      { name: 'Emily', RSVP: 'yes' },
      { name: 'Dominic', RSVP: 'yes' },
    ];
    expect(addGuestsToParty(peopleArray)).toEqual([
      { name: 'Rose' },
      { name: 'Eli' },
      { name: 'Sarah' },
      { name: 'Emily' },
      { name: 'Dominic' },
    ]);
  });
});
