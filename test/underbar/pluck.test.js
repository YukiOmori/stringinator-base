const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      {
        name: 'Ason',
        job: 'scientist',
        age: '23',
        school: 'A College'
      },
      {
        name: 'Benny',
        job: 'student',
        age: '18',
        school: 'B High School'
      },
      {
        name: 'Chen',
        job: 'designer',
        age: '42',
        school: 'C Univercicy'
      }
    ];
    expect(_.pluck(people, 'age')).toEqual(['23', '18', '42']);
  });

});