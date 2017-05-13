const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const arr = [0, 2, 5, 8, 10];
    expect(_.some(arr, (val) => val % 2 === 1)).toBe(true);      
  });

  it('returns false if no number is odd', () => {
    const arr = [0, 2, 4, 8, 10];
    expect(_.some(arr, (val) => val % 2 === 1)).toBe(false);      
  });

});