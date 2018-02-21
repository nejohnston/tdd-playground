const uniqueCharacter = require('../lib/uniqueCharacter');

describe('uniqueCharacter', () => {
  test('when given a string with a unique character, return character', () => {
    const result = uniqueCharacter('dddeefggghhh');
    expect(result).toEqual('f');
  });
  test('when given a string of all unique letters, return first unique', () => {
    const result = uniqueCharacter('defgh');
    expect(result).toEqual('d');
  });
});
