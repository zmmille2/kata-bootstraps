import { concatenateStrings } from "./extensions/array";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    concatenateStrings(): string;
    // TODO - add definition of new mixin
  }
}

/**
 * Registers all mixins
 */
export function registerMixins(): void {
  if (!Array.prototype.concatenateStrings) {
    Array.prototype.concatenateStrings = concatenateStrings;
  }

  // TODO - set definition of new mixin
}
