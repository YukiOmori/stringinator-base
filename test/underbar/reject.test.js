const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_.reject(arr, (val) => val % 2 === 1)).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    const obj = {
      name: 'Yuki',
      age: null,
      height: '175cm',
      weight: '61kg'
    };

    const resultObj = {
      name: 'Yuki',
      height: '175cm',
      weight: '61kg'
    };

    expect(_.reject(obj, (val) => val === null)).toEqual(resultObj);
  });
});