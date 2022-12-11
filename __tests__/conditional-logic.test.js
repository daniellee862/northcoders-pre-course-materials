const {
  areValuesEqual,
  areValuesNotEqual,
  isFromThe60s,
  isEvenLength,
  areStringsEqualCaseInsensitive,
} = require('../challenges/katas/2-conditional-logic');


describe('areValuesEqual', () => {
  it('returns true if passed values are equal', () => {
    expect(areValuesEqual(1, 1)).toEqual(true);
    expect(areValuesEqual('hello', 'hello')).toEqual(true);
    expect(areValuesEqual(true, true)).toEqual(true);
    const arr = [];
    expect(areValuesEqual(arr, arr)).toEqual(true);
  });
  it('returns false if passed values that are not equal', () => {
    expect(areValuesEqual(2, 1)).toEqual(false);
    expect(areValuesEqual('hello', false)).toEqual(false);
    expect(areValuesEqual(true, 'apple')).toEqual(false);
    expect(areValuesEqual([], [])).toEqual(false);
  });
});

describe('areValuesNotEqual', () => {
  it('returns true if passed values that are not equal', () => {
    expect(areValuesNotEqual(2, 1)).toEqual(true);
    expect(areValuesNotEqual('hello', false)).toEqual(true);
    expect(areValuesNotEqual(true, 'apple')).toEqual(true);
    expect(areValuesNotEqual([], [])).toEqual(true);
  });
  it('returns false if passed values are equal', () => {
    expect(areValuesNotEqual(1, 1)).toEqual(false);
    expect(areValuesNotEqual('hello', 'hello')).toEqual(false);
    expect(areValuesNotEqual(true, true)).toEqual(false);
    const arr = [];
    expect(areValuesNotEqual(arr, arr)).toEqual(false);
  });
});

describe('isFromThe60s', () => {
  it('returns true if the passed value is between 1960 and 1969 (inclusive)', () => {
    expect(isFromThe60s(1960)).toEqual(true);
    expect(isFromThe60s(1965)).toEqual(true);
    expect(isFromThe60s(1969)).toEqual(true);
  });
  it('returns false if the passed value is not between 1960 and 1969 (inclusive)', () => {
    expect(isFromThe60s(1959)).toEqual(false);
    expect(isFromThe60s(1860)).toEqual(false);
    expect(isFromThe60s(1970)).toEqual(false);
  });
});

describe('isEvenLength', () => {
  it('returns true if the passed string has an even-numbered length', () => {
    expect(isEvenLength('aabb')).toEqual(true);
    expect(isEvenLength('aabbcc')).toEqual(true);
    expect(isEvenLength('')).toEqual(true);
  });
  it('returns false if the passed string has an odd-numbered length', () => {
    expect(isEvenLength('aabbc')).toEqual(false);
    expect(isEvenLength('aabbccd')).toEqual(false);
    expect(isEvenLength('d')).toEqual(false);
  });
});

describe('areStringsEqualCaseInsensitive', () => {
  it('returns true if the passed strings are equal (case insensitive)', () => {
    expect(areStringsEqualCaseInsensitive('hello', 'hello')).toEqual(true);
    expect(areStringsEqualCaseInsensitive('hello', 'HELLO')).toEqual(true);
    expect(areStringsEqualCaseInsensitive('bAnAnA', 'BANana')).toEqual(true);
  });
  it('returns false if the passed strings are not equal (case insensitive)', () => {
    expect(areStringsEqualCaseInsensitive('hello', 'hellA')).toEqual(false);
    expect(areStringsEqualCaseInsensitive('apple', 'BANANA')).toEqual(false);
  });
});
