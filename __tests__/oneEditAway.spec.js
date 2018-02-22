const oneEditAway = require('../lib/oneEditAway');

describe('oneEditAway', () => {
  test('when given two strings that are equal minus one letter, return true', () => {
    const result = oneEditAway('pale', 'ple');
    expect(result).toBeTruthy();
  });
});
