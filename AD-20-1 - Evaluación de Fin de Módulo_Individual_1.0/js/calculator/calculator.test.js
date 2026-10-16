const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});




test('multiplica 2 * 25 para dar 50', () => {
  expect(calculator.multiply(2, 25)).toBe(50);
});

test('multiplica -5 * 5 para dar -25', () => {
  expect(calculator.multiply(-5, 5)).toBe(-25);
});

test('divide 55 entre 5 para dar 11', () => {
  expect(calculator.divide(55, 5)).toBe(11);
});

test('divide 70 entre 2.5 para dar', () => {
  expect(calculator.divide(70, 2.5)).toBe(28);
});



