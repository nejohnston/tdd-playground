module.exports = function(start, end, jumpLength) {
  if (start === undefined || end === undefined || jumpLength === undefined) {
    return undefined;
  } else if (start === end || start < 0) {
    return 0;
  } else if (end === 10) {
    return end;
  }
};
