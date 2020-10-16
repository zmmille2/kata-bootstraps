import { FizzBuzzService } from "./fizzBuzz";
import * as config from "config";
import { ConfigConstants } from "../constants/configConstants";

describe("FizzBuzzBang", () => {
  const replacements: { [n: string]: string } = config.get(ConfigConstants.fizzBuzzReplacements);
  const service = new FizzBuzzService(replacements, console);

  describe("Fizz", () => {
    it("output contains Fizz for all positive numbers divisible by 3", () => {
      for (let i = 3; i <= 3000; i += 3) {
        expect(service.execute(i)).toContain("Fizz");
      }
    });

    it("output contains Fizz for all negative numbers divisible by 3", () => {
      for (let i = -3; i >= -3000; i -= 3) {
        expect(service.execute(i)).toContain("Fizz");
      }
    });

    it("output does not contain Fizz for all positive numbers not divisible by 3", () => {
      for (let i = 2; i <= 3000; i += 3) {
        expect(service.execute(i)).not.toContain("Fizz");
      }
    });

    it("output does not contain Fizz for all negative numbers not divisible by 3", () => {
      for (let i = -2; i >= -3000; i -= 3) {
        expect(service.execute(i)).not.toContain("Fizz");
      }
    });
  });

  describe("Buzz", () => {
    it("output contains Buzz for positive numbers divisible by 5", () => {
      for (let i = 5; i <= 5000; i += 5) {
        expect(service.execute(i)).toContain("Buzz");
      }
    });

    it("output contains Buzz for all negative numbers divisible by 5", () => {
      for (let i = -5; i >= -5000; i -= 5) {
        expect(service.execute(i)).toContain("Buzz");
      }
    });

    it("output does not contain Buzz for all positive numbers not divisible by 5", () => {
      for (let i = 2; i <= 5000; i += 5) {
        expect(service.execute(i)).not.toContain("Buzz");
      }
    });

    it("output does not contain Buzz for all negative numbers not divisible by 5", () => {
      for (let i = -2; i >= -5000; i -= 5) {
        expect(service.execute(i)).not.toContain("Buzz");
      }
    });
  });

  describe("Bang", () => {
    it("output contains Bang for all positive numbers divisible by 7", () => {
      for (let i = 7; i <= 7000; i += 7) {
        expect(service.execute(i)).toContain("Bang");
      }
    });

    it("output contains Bang for all negative numbers divisible by 7", () => {
      for (let i = -7; i >= -7000; i -= 7) {
        expect(service.execute(i)).toContain("Bang");
      }
    });

    it("output does not contain Bang for all positive numbers not divisible by 7", () => {
      for (let i = 2; i <= 7000; i += 7) {
        expect(service.execute(i)).not.toContain("Bang");
      }
    });

    it("output does not contain Bang for all negative numbers not divisible by 3", () => {
      for (let i = -2; i >= -7000; i -= 7) {
        expect(service.execute(i)).not.toContain("Bang");
      }
    });
  });

  describe("FizzBuzzBang", () => {
    it("output equals FizzBuzzBang for all positive numbers divisible by 3, 5 and 7", () => {
      for (let i = 1; i < 1000; i++) {
        const n = 3 * 5 * 7 * i;
        expect(service.execute(n)).toEqual("FizzBuzzBang");
      }
    });

    it("output equals FizzBuzzBang for all negative numbers divisible by 3, 5 and 7", () => {
      for (let i = -1; i > -1000; i--) {
        const n = 3 * 5 * 7 * i;
        expect(service.execute(n)).toEqual("FizzBuzzBang");
      }
    });
  });

  describe("Numbers", () => {
    it("output is 0 for 0", () => {
      expect(service.execute(0)).toEqual("0");
    });

    it("output is number for numbers not divisible by any specified number", () => {
      expect(service.execute(2)).toEqual("2");
      expect(service.execute(8)).toEqual("8");
    });
  });

  it("answers correctly for 100000 random integers", () => {
    for (let i = 0; i < 10000; i++) {
      const random = Math.floor(Math.random() * 100000);
      const mod3 = random % 3 == 0;
      const mod5 = random % 5 == 0;
      const mod7 = random % 7 == 0;
      const output = service.execute(random);
      if (mod3 && !mod5 && !mod7) {
        expect(output).toEqual("Fizz");
      } else if (!mod3 && mod5 && !mod7) {
        expect(output).toEqual("Buzz");
      } else if (!mod3 && !mod5 && mod7) {
        expect(output).toEqual("Bang");
      } else if (mod3 && mod5 && !mod7) {
        expect(output).toEqual("FizzBuzz");
      } else if (mod3 && !mod5 && mod7) {
        expect(output).toEqual("FizzBang");
      } else if (!mod3 && mod5 && mod7) {
        expect(output).toEqual("BuzzBang");
      } else if (mod3 && mod5 && mod7) {
        expect(output).toEqual("FizzBuzzBang");
      } else {
        expect(output).toEqual(random.toString());
      }
    }
  });
});
