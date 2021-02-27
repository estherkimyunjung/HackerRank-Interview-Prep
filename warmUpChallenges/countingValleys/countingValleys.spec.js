const { it, expect } = require("@jest/globals");
const { countingValleys } = require("./countingValleys");

describe("countingValleys(steps, path)", () => {
  it("8 steps, DDUUUUDD path should have 1 time back to sea level", () => {
    expect(countingValleys(8, "DDUUUUDD")).toBe(1);
  });
  it("4 steps, DDDU path should never back to sea level", () => {
    expect(countingValleys(4, "DDDU")).toBe(1);
  });
  it("12 steps, DDUUDDUDUUUD path should have 2 valley", () => {
    expect(countingValleys(12, "DDUUDDUDUUUD")).toBe(2);
  });
});
