const { countSwaps } = require("./bubbleSort");

describe("countSwaps(arr)", () => {
  it("countSwaps([6, 4, 1]) should output for 'Array is sorted in 3 swaps., First Element: 1, Last Element: 6'", () => {
    expect(countSwaps([6, 4, 1])).toBe(
      "Array is sorted in 3 swaps., First Element: 1, Last Element: 6"
    );
  });
  it("countSwaps([1, 2, 3]) should output for 'Array is sorted in 0 swaps., First Element: 1, Last Element: 3'", () => {
    expect(countSwaps([1, 2, 3])).toBe(
      "Array is sorted in 0 swaps., First Element: 1, Last Element: 3"
    );
  });
  it("countSwaps([3, 2, 1]) should output for 'Array is sorted in 3 swaps., First Element: 1, Last Element: 3'", () => {
    expect(countSwaps([3, 2, 1])).toBe(
      "Array is sorted in 3 swaps., First Element: 1, Last Element: 3"
    );
  });
});
