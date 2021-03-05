import { concatenateStrings } from "./extensions/array";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    concatenateStrings(): string;
  }
}

/**
 * Registers all mixins
 */
export function registerMixins(): void {
  if (!Array.prototype.concatenateStrings) {
    Array.prototype.concatenateStrings = concatenateStrings;
  }
}
