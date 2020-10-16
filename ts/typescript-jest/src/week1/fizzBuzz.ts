import * as config from "config";
import { ConfigConstants } from "../constants/configConstants";
import { Logger } from "../shared/logger";

interface FizzBuzzReplacement {
  key: number;
  value: string;
}

/**
 * Service for adding keywords for numbers that are multiples
 * of configured values
 */
export class FizzBuzzService {
  private replacements: FizzBuzzReplacement[];
  private logger: Logger;

  constructor(replacements: { [n: string]: string }, logger: Logger) {
    this.logger = logger;
    logger.debug("Initializing FizzBuzzService");

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

  /**
   * As configured, will add the following replacements if the number is
   * a multiple of the specified key:
   * 
   * 3 - Fizz
   * 5 - Buzz
   * 7 - Bang
   * 
   * @param {number} n Number for which to determine output.
   * @returns {string} Replacement value if number is a multiple of one
   * of the specified inputs. Stringified number if it is not a multiple
   * of any keys
   */
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
