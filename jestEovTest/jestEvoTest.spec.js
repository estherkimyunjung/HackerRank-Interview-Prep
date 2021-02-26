const { it, expect } = require("@jest/globals");
const { getIndex } = require("./jestEovTest");

describe("getIndex(letter)", () => {
  it("should output 0 for A", () => {
    expect(getIndex("A")).toBe(0);
  });

  it("should output 0 for a", () => {
    expect(getIndex("A")).toBe(0);
  });

  it("should output 26 for a number, or anything that isn't a letter", () => {
    expect(getIndex("?")).toBe(26);
    expect(getIndex("1")).toBe(26);
    expect(getIndex("0")).toBe(26);
    expect(getIndex("<")).toBe(26);
    expect(getIndex("\\")).toBe(26);
  });
});
