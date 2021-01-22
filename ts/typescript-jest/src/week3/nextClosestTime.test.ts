import each from "jest-each";
import { nextClosestTime } from "./nextClosestTime";

describe("Next Closest Time", () => {
  // Here is where you will write your tests
  describe("Invalid Times", () => {
    each([["1:34"], ["12:9"], ["blah"], ["28:62"]]).it(
      "should throw error when input is '%s'",
      (text: string) => {
        expect(() => nextClosestTime(text)).toThrowError("Invalid Time");
      }
    );
  });
});
