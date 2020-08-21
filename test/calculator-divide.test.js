import calculator from '../src/calculator';

test('10 / 5 = 2', () => {
  const calc = calculator();
  const a = calc.divide(10, 5);
  expect(a).toBe(2);
});
