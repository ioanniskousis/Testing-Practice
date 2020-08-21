import uncaesar from '../src/caesar';

test('encription by shift-13', () => {
  const string = uncaesar('qrsraq gur rnfg jnyy bs gur pnfgyr!!');
  expect(string).toBe('defend the east wall of the castle!!');
});