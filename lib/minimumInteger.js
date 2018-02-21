module.exports = (minimumInteger) => {
  const sortMinimumInteger = minimumInteger.sort();
  console.log(sortMinimumInteger);
  const cleaner = Array.from(new Set(sortMinimumInteger));
  console.log(cleaner);
  const minimumIntegerArray = Array.from(cleaner);
  console.log(minimumIntegerArray);

  for (let i = 0; i < minimumIntegerArray.length; i += 1) {
    if (minimumIntegerArray[i][0] !== minimumIntegerArray[i][1]) {
      return minimumIntegerArray[i][0];
    }
    return -1;
  }
  return -1;
};
