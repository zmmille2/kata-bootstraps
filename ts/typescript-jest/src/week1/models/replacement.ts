/**
 * FizzBuzz Replacement value
 */
export interface FizzBuzzReplacement {
  /**
   * Key for which a number needs to be a multiple in
   * order for the replacement to happen
   */
  key: number;

  /**
   * Keyword value for replacement if number is a multiple
   * of the key
   */
  value: string;
}
