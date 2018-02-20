const frogJumps = require("../lib/frogJumps");

describe("frogJumps", () => {
  test("when start is equal to end, should return 0", () => {
    const result = frogJumps(10, 10, 5);
    expect(result).toEqual(0);
  });
  test("when start is less 0, should return 0", () => {
    const result = frogJumps(-1, 10, 5);
    expect(result).toEqual(0);
  });
  test("when end is equal to 10, should return end", () => {
    const result = frogJumps(0, 10, 5);
    expect(result).toEqual(10);
  });
  test("when start, end, jumpLength equal undefined, return undefined");
  const result = frogJumps(undefined, undefined, undefined);
  expect(result).toEqual(undefined);
});
