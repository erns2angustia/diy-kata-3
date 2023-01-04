const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const names = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];
    expect(joinNames(names)).toEqual("Bart, Lisa & Maggie");
  });
});
