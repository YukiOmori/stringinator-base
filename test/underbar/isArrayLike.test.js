const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_.isArrayLike(arr)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrLikeObj = {
      length: 10,
      foo: 2,
      bar: 3,
    };
    expect(_.isArrayLike(arrLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrLikeObj = {
      length: '10',
      foo: 2,
      bar: 3,
    };
    expect(_.isArrayLike(nonArrLikeObj)).toBe(false);
  });
});
