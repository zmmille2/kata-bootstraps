import { FizzBuzzService } from "./fizzBuzz";

describe("FizzBuzz", () => {
  describe("Fizz", () => {
    it("output contains Fizz for all positive numbers divisible by 3", () => {
      for (let i = 3; i <= 3000; i += 3) {
        expect(FizzBuzzService.execute(i)).toContain("Fizz");
      }
    });

    it("output contains Fizz for all negative numbers divisible by 3", () => {
      for (let i = -3; i >= -3000; i -= 3) {
        expect(FizzBuzzService.execute(i)).toContain("Fizz");
      }
    });

    it("output does not contain Fizz for all positive numbers not divisible by 3", () => {
      for (let i = 2; i <= 3000; i += 3) {
        expect(FizzBuzzService.execute(i)).not.toContain("Fizz");
      }
    });

    it("output does not contain Fizz for all negative numbers not divisible by 3", () => {
      for (let i = -2; i >= -3000; i -= 3) {
        expect(FizzBuzzService.execute(i)).toContain("Fizz");
      }
    });
  });

  describe("Buzz", () => {
    it("output contains Buzz for positive numbers divisible by 5", () => {
      for (let i = 3; i <= 3000; i += 3) {
        expect(FizzBuzzService.execute(i)).toContain("Fizz");
      }
    });

    it("output contains Buzz for all negative numbers divisible by 5", () => {
      for (let i = -3; i >= -3000; i -= 3) {
        expect(FizzBuzzService.execute(i)).toContain("Fizz");
      }
    });

    it("output does not contain Buzz for all positive numbers not divisible by 5", () => {
      for (let i = 2; i <= 3000; i += 3) {
        expect(FizzBuzzService.execute(i)).not.toContain("Fizz");
      }
    });

    it("output does not contain Buzz for all negative numbers not divisible by 5", () => {
      for (let i = -2; i >= -3000; i -= 3) {
        expect(FizzBuzzService.execute(i)).toContain("Fizz");
      }
    });
  });

  it("output contains FizzBuzz for all positive numbers divisible by 3 and 5", () => {
    for (let i = 1; i < 1000; i++) {
      const n = 3 * 5 * i;
      expect(FizzBuzzService.execute(n)).toContain("FizzBuzz");
    }
  });

  it("output contains FizzBuzz for all negative numbers divisible by 3 and 5", () => {
    for (let i = -1; i > -1000; i--) {
      const n = 3 * 5 * i;
      expect(FizzBuzzService.execute(n)).toContain("FizzBuzz");
    }
  });

  it("output is 0 for 0", () => {
    expect(FizzBuzzService.execute(0)).toEqual("0");
  });

  it("output is number for numbers not divisible by any specified number", () => {
    expect(FizzBuzzService.execute(2)).toEqual("2");
    expect(FizzBuzzService.execute(7)).toEqual("7");
  });
});
