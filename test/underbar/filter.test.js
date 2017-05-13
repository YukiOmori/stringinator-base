const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_.filter(arr, (val) => val % 2 === 1)).toEqual([1, 3, 5]);
  });

  it('filters an object to only numeric values', () => {
    const arr = ['a', 2, 'c', 4, 5];
    expect(_.filter(arr, (val) => !isNaN(val))).toEqual([2, 4, 5]);
  });
});