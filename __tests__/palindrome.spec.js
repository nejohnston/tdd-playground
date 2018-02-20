const isPalindrome = require('../lib/palindrome');

describe('isPalindrome', () => {
  test('when palindrome is equal to palindrome, return true', () => {
    const result = isPalindrome('mom');
    expect(result).toBeTruthy();
  });
});
