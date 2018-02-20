const isPalindrome = require('../lib/palindrome');

describe('isPalindrome', () => {
  test('when isPalindrome is not typeof string, return undefined', () => {
    const result = isPalindrome('mom');
    expect(result).toEqual(undefined);
  });
});
