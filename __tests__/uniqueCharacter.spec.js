const uniqueCharacter = require('../lib/uniqueCharacter');

describe('uniqueCharacter', () => {
  test('when given a string with a unique character, return character', () => {
    const result = uniqueCharacter('dddeefggghhh');
    expect(result).toEqual('f');
  });
});
