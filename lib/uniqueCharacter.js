module.exports = (uniqueCharacter) => {
  // function unique(uniqueCharacter) {
  const uniqueCharacterSplit = uniqueCharacter.split('');
  console.log(uniqueCharacterSplit);
  //   const answer = '';
  //   const nextLetterIndex = 0;
  for (let i = 0; uniqueCharacterSplit.length - 1 > i; i += 1) {
    let count = 0;
    for (let j = 0; uniqueCharacterSplit.length - 1 > j; j += 1) {
      if (uniqueCharacterSplit[i] === uniqueCharacterSplit[j]) count += 1;
    }
    if (count === 1) return uniqueCharacterSplit[i];
  }
  return -1;
};
