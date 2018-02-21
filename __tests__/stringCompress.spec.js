const stringCompress = require('../lib/stringCompress');

describe('stringCompress', () => {
  test('when given not a string, return undefined', () => {
    const result = stringCompress(2);
    expect(result).toEqual(undefined);
  });
  test('when given a string aaabbbccc, return string compressed', () => {
    const result = stringCompress('aaabbbccc');
    expect(result).toEqual('a3b3c3');
  });
});
