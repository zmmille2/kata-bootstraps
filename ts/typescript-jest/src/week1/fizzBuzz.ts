import * as config from "config";
import { ConfigConstants } from "../constants/configConstants";
import { Logger } from "../shared/logger";

interface FizzBuzzReplacement {
  key: number;
  value: string;
}

export class FizzBuzzService {
  private replacements: FizzBuzzReplacement[];
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
    logger.debug("Initializing FizzBuzzService");

    const replacements: { [n: string]: string } = config.get(
      ConfigConstants.fizzBuzzReplacements
    );

    logger.debug(
      `Parsing and sorting replacements: ${JSON.stringify(
        replacements,
        null,
        2
      )}`
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

    logger.debug("FizzBuzzService initialized");
  }

  public execute(n: number): string {
    this.logger.debug(`Input: ${n}`);
    if (n == 0) {
      const result = n.toString();
      this.logger.debug(`Output: ${result}`);
      return result;
    }
    let result = "";

    for (const replacement of this.replacements) {
      const { key, value } = replacement;
      if (n % key == 0) {
        this.logger.debug(`${n} is a multiple of ${key}`);
        result += value;
      }
    }
    if (result == "") {
      return n.toString();
    }
    this.logger.debug(`Output: ${result}`);
    return result;
  }
}
