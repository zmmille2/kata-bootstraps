/**
 * Concatenates all elements of array into one string
 *
 * @param {any[]} this The array of type T
 * @returns {string} Concatenated strings from array
 */
export function concatenateStrings<T>(this: T[]): string {
  let result = "";
  const elements = [...this];

  elements.forEach((element) => (result += element.toString()));
  return result;
}
