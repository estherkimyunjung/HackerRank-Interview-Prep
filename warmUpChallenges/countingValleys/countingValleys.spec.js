const { it, expect } = require("@jest/globals");
const { countingValleys } = require("./countingValleys");

describe("countingValleys(steps, path)", () => {
  it("8 steps, DDUUUUDD path should have current valley", () => {
    expect(countingValleys(8, "DDUUUUDD")).toBe(1);
  });
  it("4 steps, DDDU path should have 3 valley", () => {
    expect(countingValleys(4, "DDDU")).toBe(3);
  });
});
