import { registerMixins } from "../registerMixins";

describe("Array mixins", () => {
  beforeAll(() => {
    registerMixins();
  });

  it("concatenates strings", () => {
    const myStrings = ["a", "b", "c"];
    expect(myStrings.concatenateStrings()).toEqual("abc");
  });

  it("concatenates numbers", () => {
    const myNumbers = [1, 2, 3];
    expect(myNumbers.concatenateStrings()).toEqual("123");
  });
});
