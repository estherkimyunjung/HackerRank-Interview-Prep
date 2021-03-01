const { repeatedString } = require("./repeatedString");

describe("repeatedString(string, numberOfChar)", () => {
  it("repeatedString('abc', 10) should have 'a' 3 times ", () => {
    expect(repeatedString("abc", 10)).toBe(4);
  });
  it("repeatedString('aba', 10) should have 'a' 7 times ", () => {
    expect(repeatedString("aba", 10)).toBe(7);
  });
  it("repeatedString('abcac', 10) should have 'a' 7 times ", () => {
    expect(repeatedString("abcac", 10)).toBe(4);
  });
  it("repeatedString('a', 1000000000000) should have 'a' 7 times ", () => {
    expect(repeatedString("a", 1000000000000)).toBe(1000000000000);
  });
});
