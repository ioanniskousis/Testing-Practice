import calculator from '../src/calculator';

test('2 * 3 = 6', () => {
  const calc = calculator();
  const a = calc.multiply(2, 3);
  expect(a).toBe(6);
});
