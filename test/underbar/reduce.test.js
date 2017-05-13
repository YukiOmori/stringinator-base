const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(_.reduce(arr, (accumulator, value) => accumulator + value, 100)).toBe(155);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(_.reduce(arr, (accumulator, value) => accumulator + value)).toBe(55);
  });

});