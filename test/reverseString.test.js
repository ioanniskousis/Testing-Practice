import reverseString from '../src/reverseString';

test('reverses the characters\' order of a given string', () => {
  const string = reverseString('New York');
  expect(string).toBe('kroY weN');
});