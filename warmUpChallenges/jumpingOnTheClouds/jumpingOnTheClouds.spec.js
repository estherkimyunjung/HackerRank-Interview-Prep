const { jumpingOnClouds } = require("./jumpingOnTheClouds");

describe("jumpingOnClouds(cloudsCount, cloudsType)", () => {
  it("7 clous, 0 0 1 0 0 1 0 cloudsType sould have 4 jumps", () => {
    expect(jumpingOnClouds(7, "0010010")).toBe(4);
  });
  it("6 clous, 0 0 0 0 1 0 cloudsType sould have 4 jumps", () => {
    expect(jumpingOnClouds(6, "000010")).toBe(3);
  });
  it("7 clous, 0 1 0 0 0 1 0 cloudsType sould have 4 jumps", () => {
    expect(jumpingOnClouds(7, "0100010")).toBe(3);
  });
});
