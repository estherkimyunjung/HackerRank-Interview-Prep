const { it, expect } = require("@jest/globals");
const { twoDArray } = require("./twoDArray");

describe("hourglassSum(arr)", () => {
  it("Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum", () => {
    expect(
      hourglassSum([
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0],
      ])
    ).toBe(19);
  });
  it("Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum", () => {
    expect(
      hourglassSum([
        [-9, -9, -9, 1, 1, 1],
        [0, -9, 0, 4, 3, 2],
        [-9, -9, -9, 1, 2, 3],
        [0, 0, 8, 6, 6, 0],
        [0, 0, 0, -2, 0, 0],
        [0, 0, 1, 2, 4, 0],
      ])
    ).toBe(28);
  });
});
