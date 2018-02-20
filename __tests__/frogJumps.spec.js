const frogJumps = require("../lib/frogJumps.js");

describe("Frogs a Jumpin", () => {
  describe("when start is equal to end", () => {
    it("should return 0", () => {
      const result = frogJumps(10, 10, 5);
      expect(result).toEqual(0);
    });
  });
});
