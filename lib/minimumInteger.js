module.exports = (minimumInteger) => {
  const minimumIntegerArray = Object.keys(minimumInteger)
    .sort()
    .forEach(console.log());
};
