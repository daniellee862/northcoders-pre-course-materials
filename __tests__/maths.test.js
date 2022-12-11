const {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
  findSmallestAndBiggest,
  splitTheBeans,
} = require('../challenges/katas/1-maths');

describe('modulo', () => {
  it('modulo returns the remainder of dividing a by b', () => {
    expect(modulo(4, 2)).toEqual(0);
    expect(modulo(7, 2)).toEqual(1);
  });
});

describe('squareRoot', () => {
  it('squareRoot returns the square root of n', () => {
    expect(squareRoot(4)).toEqual(2);
    expect(squareRoot(16)).toEqual(4);
  });
});
describe('raiseToPower', () => {
  it('raiseToPower returns m to the nth power§', () => {
    expect(raiseToPower(2, 3)).toEqual(8);
    expect(raiseToPower(3, 4)).toEqual(81);
    expect(raiseToPower(8, 0)).toEqual(1);
  });
});
describe('formatMoney', () => {
  it('adds zeroes up to 2 decimal numbers', () => {
    expect(formatMoney(1)).toEqual('£1.00');
  });
  it('rounds to 2 decimal numbers', () => {
    expect(formatMoney(3.457)).toEqual('£3.46');
  });
});

describe('calculateCircleArea', () => {
  it('returns the area of a circle', () => {
    expect(calculateCircleArea(1)).toEqual(3.142);
    expect(calculateCircleArea(2)).toEqual(12.566);
    expect(calculateCircleArea(3)).toEqual(28.274);
  });
});

describe('calculateFullTurns', () => {
  it('returns the amount of full turns you can make with the passed degrees', () => {
    expect(calculateFullTurns(90)).toEqual(0);
    expect(calculateFullTurns(363)).toEqual(1);
    expect(calculateFullTurns(800)).toEqual(2);
    expect(calculateFullTurns(2000)).toEqual(5);
  });
});

describe('findSmallestAndBiggest', () => {
  it('returns smallest and biggest number in an array', () => {
    expect(findSmallestAndBiggest([1, 2, 3, 4, 5])).toEqual([1, 5]);
    expect(findSmallestAndBiggest([12, 500, 43, 2, -5])).toEqual([-5, 500]);
    expect(findSmallestAndBiggest([65, 300])).toEqual([65, 300]);
  });
});

describe('splitTheBeans', () => {
  it('returns the average cost per person', () => {
    expect(splitTheBeans(20, 4)).toBe(5);
    expect(splitTheBeans(21, 7)).toBe(3);
  });
  it('returns average cost rounded up to nearest whole integer per person', () => {
    expect(splitTheBeans(20, 9)).toBe(3);
    expect(splitTheBeans(15, 2)).toBe(8);
  });
});
