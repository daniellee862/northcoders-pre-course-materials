const {
  getEvenNumbers,
  getItemsLongerThan,
  getSandwichFilling,
  getLastItems,
  removeItem,
  mergeArrays,
  flattenArrayByOne,
  isItemOmnipresent,
} = require('../challenges/katas/4-arrays');


describe('getEvenNumbers', () => {
  it('returns an array of all even numbers in the passed array', () => {
    expect(getEvenNumbers([1, 2, 3])).toEqual([2]);
    expect(getEvenNumbers([2, 4, 6])).toEqual([2, 4, 6]);
    expect(getEvenNumbers([1, 3, 5])).toEqual([]);
  });
});

describe('getItemsLongerThan', () => {
  it('returns an array of items in the passed array that are longer than the passed length', () => {
    const array = ['ccc', 'a', 'dddd', 'bb'];
    expect(getItemsLongerThan(array, 0)).toEqual(array);
    expect(getItemsLongerThan(array, 1)).toEqual(['ccc', 'dddd', 'bb']);
    expect(getItemsLongerThan(array, 2)).toEqual(['ccc', 'dddd']);
    expect(getItemsLongerThan(array, 10)).toEqual([]);
  });
});

describe('getLastItems', () => {
  it('returns an array with the n last items of the passed array', () => {
    const array = ['a', 2, true, 4, null];
    expect(getLastItems(array, 1)).toEqual([null]);
    expect(getLastItems(array, 3)).toEqual([true, 4, null]);
    expect(getLastItems(array, 5)).toEqual(array);
  });
});

describe('getSandwichFilling', () => {
  it('returns an array with all the items of the passed array except the first and last ones', () => {
    const array = [1, 2, 3];
    expect(getSandwichFilling(array)).toEqual([2]);
    const burger = ['bread', 'tomato', 'lettuce', 'cheese', 'patty', 'bread'];
    expect(getSandwichFilling(burger)).toEqual([
      'tomato',
      'lettuce',
      'cheese',
      'patty',
    ]);
    const sadSandwich = ['bread', 'bread'];
    expect(getSandwichFilling(sadSandwich)).toEqual([]);
  });
});

describe('removeItem', () => {
  it('returns a new array without the item in the passed position', () => {
    expect(removeItem([1], 0)).toEqual([]);
    expect(removeItem([1, 2, 3], 1)).toEqual([1, 3]);
    expect(removeItem([1, 7, 0, 4], 2)).toEqual([1, 7, 4]);
    expect(removeItem([1, 2, 1], 2)).toEqual([1, 2]);
  });
  it("doesn't mutate the passed array, i.e. it returns a new array, leaving the original one unmodified", () => {
    const original = [1, 2, 3];
    const modified = removeItem(original, 1);
    expect(original).not.toEqual(modified);
    expect(original).toEqual([1, 2, 3]);
  });
  it('ignores arguments out of the length of the array', () => {
    expect(removeItem([1, 2, 3], 8)).toEqual([1, 2, 3]);
  });
});

describe('mergeArrays', () => {
  it('returns a new array with all the elements of the two passed arrays', () => {
    let a, b;
    (a = [1, 2, 3]), (b = [4, 5, 6]);
    expect(mergeArrays(a, b)).toEqual([1, 2, 3, 4, 5, 6]);
    (a = []), (b = [4, 5, 6]);
    expect(mergeArrays(a, b)).toEqual([4, 5, 6]);
    (a = [1, 2, 3]), (b = []);
    expect(mergeArrays(a, b)).toEqual([1, 2, 3]);
  });
  it('does not mutate the passed arrays, i.e. returns a new array, leaving the original arrays untouched', () => {
    const a = [1, 2, 3],
      b = [4, 5, 6];
    const merged = mergeArrays(a, b);
    expect(merged).not.toEqual(a);
    expect(merged).not.toEqual(b);
    expect(a).toEqual([1, 2, 3]);
    expect(b).toEqual([4, 5, 6]);
  });
});

describe('flattenArrayByOne', () => {
  it('returns a flat array with all the elements of the nested arrays in their original order', () => {
    let arrayOfArrays, expected;
    arrayOfArrays = [[1, 2], [], [3], ['hello', true]];
    expected = [1, 2, 3, 'hello', true];
    expect(flattenArrayByOne(arrayOfArrays)).toEqual(expected);

    arrayOfArrays = [[1], [2], [[3, 4]]];
    expected = [1, 2, [3, 4]];
    expect(flattenArrayByOne(arrayOfArrays)).toEqual(expected);
  });
  it('does not mutate the passed array, i.e. returns a new array, leaving the original untouched', () => {
    const original = [[1, 2], [], [3, 4]];
    const flat = flattenArrayByOne(original);
    expect(original).not.toEqual(flat);
    expect(original).toEqual([[1, 2], [], [3, 4]]);
  });
});

describe('isItemOmnipresent', () => {
  it('returns true if the passed value is present in all the arrays inside the passed array', () => {
    const arrayOfArrays = [
      [9, 2, 3],
      [4, 5, 9],
      [-2, 9, -1],
      [1, 2, 3, 4, 5, 9],
    ];
    expect(isItemOmnipresent(arrayOfArrays, 9)).toBe(true);
  });
  it('returns false if the passed value is not present in at least one array inside the passed array', () => {
    let arrayOfArrays = [
      [9, 2, 3],
      [4, 5, 9],
      [-2, 1, -1],
    ];
    expect(isItemOmnipresent(arrayOfArrays, 9)).toBe(false);
    arrayOfArrays = [
      [6, 2, 3],
      [4, 5, 8],
      [-2, 9, -1],
    ];
    expect(isItemOmnipresent(arrayOfArrays, 9)).toBe(false);
    arrayOfArrays = [
      [4, 2, 3],
      [4, 5, 9],
      [-2, 9, 9],
    ];
    expect(isItemOmnipresent(arrayOfArrays, 9)).toBe(false);
  });
});
