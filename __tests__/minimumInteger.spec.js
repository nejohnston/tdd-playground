const minimumInteger = require('../lib/minimumInteger');

describe('minimumInteger', () => {
  test('', () => {
    const result = minimumInteger([1, 3, 6, 4, 1, 2]);
    expect(result).toEqual([5]);
  });
});
