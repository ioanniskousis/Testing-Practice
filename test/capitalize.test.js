import capitalize from '../src/capitalize';

test('capitalizes a given string', () => {
  const string = capitalize('bolivar!');
  expect(string).toBe('Bolivar!');
});
