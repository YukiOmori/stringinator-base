const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_.indexOf(arr, 1)).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_.indexOf(arr, 5)).toBe(4);
  });

  it('returns -1 for a missing value', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_.indexOf(arr, 'a')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = [1, 1, 3, 1, 5];
    expect(_.indexOf(arr, 1, 2)).toBe(3);
  });

  it('starts searching at the given offset', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_.indexOf(arr, 4, 2)).toBe(3);
  });

});