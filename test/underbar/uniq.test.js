const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const arr = [1, 1, 2, 2, 2, 3, 3, 3, 3];
    expect(_.uniq(arr)).toEqual([1, 2, 3]);
  });
});