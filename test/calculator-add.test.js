import calculator from '../src/calculator';

test('1 + 2 = 3', () => {
  const calc = calculator();
  const a = calc.add(1, 2);
  expect(a).toBe(3);
});
