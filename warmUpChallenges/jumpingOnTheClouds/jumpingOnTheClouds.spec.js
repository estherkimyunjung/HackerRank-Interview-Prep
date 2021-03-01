const { jumpingOnClouds } = require("./jumpingOnTheClouds");

describe("jumpingOnClouds(couldsArr)", () => {
  it("7 clous, [0,0,1,0,0,1,0] cloudsType sould have 4 jumps", () => {
    expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])).toBe(4);
  });
  it("6 clous, [0,0,0,0,1,0] couldsArr sould have 4 jumps", () => {
    expect(jumpingOnClouds([0, 0, 0, 0, 1, 0])).toBe(3);
  });
  it("6 clous, [0,0,0,1,0,0] couldsArr sould have 4 jumps", () => {
    expect(jumpingOnClouds([0, 0, 0, 0, 1, 0])).toBe(3);
  });
  it("7 clous, [0,1,0,0,0,1,0] couldsArr sould have 4 jumps", () => {
    expect(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])).toBe(3);
  });
});
