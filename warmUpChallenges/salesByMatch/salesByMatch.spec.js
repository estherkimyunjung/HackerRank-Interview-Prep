const { it, expect } = require("@jest/globals");
const { sockMerchant } = require("./salesByMatch");

describe("sockMerchant(socksCounts, socksColor)", () => {
  it("7 socks, [1, 2, 1, 2, 1, 3, 2] colors should have 2pairs", () => {
    expect(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])).toBe(2);
  });
  it("9 socks, [10, 20, 20, 10, 10, 30, 50, 10, 20] colors should have 2pairs", () => {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
  });
});
