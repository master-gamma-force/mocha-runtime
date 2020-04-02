const { equal } = require('assert');
const getEvenNumbers = require('../filter');

describe('getEvenNumbers', () => {

  it('should return an array with correct number of items', () => {
    const rta = getEvenNumbers([1,2,3,4,5,6,8,9]);
    assert.equal(rta.length, 4);
  });

});