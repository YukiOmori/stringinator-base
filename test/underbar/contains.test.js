const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    expect(_.contains(arr, 'c')).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    expect(_.contains(arr, 100)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const obj = {
      name: 'Taro',
      age: '32',
      height: '175'
    };
    expect(_.contains(obj, 'name')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
   const obj = {
      name: 'Taro',
      age: '32',
      height: '175'
    };
    expect(_.contains(obj, 'job')).toBe(false);
   });

});