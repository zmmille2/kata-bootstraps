import * as config from "config";
import { ConfigConstants } from "../constants/configConstants";

interface FizzBuzzReplacement {
  key: number;
  value: string;
}
export class FizzBuzzService {
  private replacements: FizzBuzzReplacement[];

  constructor() {
    const replacements: { [n: string]: string } = config.get(
      ConfigConstants.fizzBuzzReplacements
    );
    this.replacements = Object.keys(replacements)
      .map((key) => {
        const r: FizzBuzzReplacement = {
          key: parseInt(key),
          value: replacements[key],
        };
        return r;
      })
      .sort((a, b) => (a.key > b.key ? 1 : -1));
  }

  public execute(n: number): string {
    if (n == 0) {
      return n.toString();
    }
    let result = "";

    for (const replacement of this.replacements) {
      const { key, value } = replacement;
      if (n % key == 0) {
        result += value;
      }
    }
    if (result == "") {
      return n.toString();
    }
    return result;
  }
}
