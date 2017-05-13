const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    let count = 0;
    _.each(arr, function (value, index, array) {
      expect(array[index]).toBe(value);
      count ++;
    } );
    expect(count).toBe(5);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrLikeObj = {
      length: 10,
      name: 'Tom',
      age: 28,
      nationality: 'JPN'
    };
    let count = 0;
    _.each(arrLikeObj, function (value, key, array) {
      expect(arrLikeObj[key]).toBe(value);
      count ++;
    } );
    expect(count).toBe(4);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      name: 'Tom',
      age: 28,
      nationality: 'JPN'
    };
    let count = 0;
    _.each(obj, function (value, key, array) {
      expect(obj[key]).toBe(value);
      count ++;
    } );
    expect(count).toBe(3);
  });
});

