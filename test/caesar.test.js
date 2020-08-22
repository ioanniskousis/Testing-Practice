import caesar from '../src/caesar';

test('encription by shift-13', () => {
  const string = caesar('defend the east wall of the castle!!');
  expect(string).toBe('qrsraq gur rnfg jnyy bs gur pnfgyr!!');
});