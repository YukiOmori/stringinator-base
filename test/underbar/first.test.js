const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_.first(arr, 3)).toEqual([1, 2, 3]);
  });

  it('returns the first 2 elements of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_.first(arr, 2)).toEqual([1, 2]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_.first(arr, 6)).toEqual([1, 2, 3, 4, 5]);
  });
});