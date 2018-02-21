// module.exports = (uniqueCharacter) => {
//   const uniqueCharacterSplit = uniqueCharacter.split('');
//   console.log(uniqueCharacterSplit);
//   const result = Array.from(new Set(uniqueCharacter));
//   const filteredCh = uniqueCharacter.slice(/(.)(?=\1)/g, '');
//   const filteredCh = uniqueCharacter.replace(
//     /[\s\S](?=([\s\S]+))/g,
//     (c, s) => (s.indexOf(c) + 1 ? '' : c),
//   );
//   console.log(filteredCh);
// };
// function unique(uniqueCharacter) {
//   const uniqueCharacterSplit = uniqueCharacter.split('');
//   console.log(uniqueCharacter);
//   //   const answer = '';
//   //   const nextLetterIndex = 0;
//   for (let i = 0; uniqueCharacterSplit.length - 1 > i; i += 1) {
//     let count = 0;
//     for (let j = 0; uniqueCharacterSplit.length - 1 > j; j += 1) {
//       if (uniqueCharacterSplit[i] === uniqueCharacterSplit[j]) count += 1;
//     }
//     if (count === 1) return uniqueCharacterSplit[i];
//   }
//   return undefined;
// };
//   if (typeof uniqueCharacter !== 'string') {
//     return undefined;
//   }
//   const uniqueCharacterArray = uniqueCharacter.split('');
//   //   const compressCounter = compressStringArray.length.toString();
//   // want to filter over the array to check if the next letter is the same
//   let counter = 0;
//   let answer = '';
//   let newLetterIndex = 0;
//   for (let i = 0; i < uniqueCharacterArray.length + 1; i += 1) {
//     if (uniqueCharacterArray[i] === uniqueCharacterArray[newLetterIndex]) {
//       counter += 1;
//     } else {
//       answer = answer.concat(uniqueCharacterArray[newLetterIndex], counter);
//       newLetterIndex = i;
//       counter = 1;
//     }
//   }
//   return answer;
// };
