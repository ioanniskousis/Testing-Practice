import calculator from '../src/calculator';

test('3 - 1 = 2', () => {
  const calc = calculator();
  const a = calc.subtract(3, 1);
  expect(a).toBe(2);
});
