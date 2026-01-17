const { add, subtract, multiply } = require('../index');

describe('Math functions test suite', () => {

  test('add: adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtract: subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiply: multiplies 2 * 4 to equal 8', () => {
    expect(multiply(2, 4)).toBe(8);
  });

  test('add: throws error if inputs are not numbers', () => {
    expect(() => add(2, '3')).toThrow('Both inputs must be numbers');
  });

});
