import { nextClosestTime } from "./nextClosestTime";

describe("Next Closest Time", () => {
  const invalidErrorMessage = "Invalid Time";

  const invalidTimes = ["1:34", "12:9", "blah", "28:62"];

  it.each(invalidTimes.map((time) => [time]))(
    "should throw error when input is '%s'",
    (time: string) => {
      expect(() => nextClosestTime(time)).toThrowError(invalidErrorMessage);
    }
  );

  const validResultPairs = [
    ["19:34", "19:39"],
    ["23:59", "22:22"],
  ];

  it.each(validResultPairs)(
    "when '%s', should produce '%s'",
    (time: string, expectedOutput: string) => {
      expect(nextClosestTime(time)).toEqual(expectedOutput);
    }
  );
});
