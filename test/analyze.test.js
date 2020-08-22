import analyze from '../src/analyze';

test('[2, 7, 4, 1]', () => {
  const obj = analyze([2, 7, 4, 1]);
  expect(obj.average).toBe(3.5);
  expect(obj.min).toBe(1);
  expect(obj.max).toBe(7);
  expect(obj.length).toBe(4);
});