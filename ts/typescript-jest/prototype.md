# Prototype Kata

This week we will be talking more about the Prototype design pattern.
This Kata will be two challenges that make use of this pattern in TypeScript.

## Challenge 1 - Use prototype to mock functions and assert calls

One super common use case for `prototype` in JS/TS is for mocking functions.
For example, if we have the following class:

```typescript
class Greeter {
  greet() {
    console.log("Hello")
  }
}
```

When we instantiate a new `Greeter` and then call `greet()`, it should print `Hello` to the console.

However, if before we instantiate the `Greeter`, we do something like:

```typescript
Greeter.prototype.greet = () => {
  console.log("Hey");
}
```

from that point forward, whenever we instantiate a new `Greeter` and then call `greet()`, we'd see `Hey` in the console.

This task will be to mock out functions of the `BlockBlobClient`, which is used in our `AzureBlobStorageService` (`storage/providers/azureBlobStorageService.ts`) in order to assert that they were called correctly.
We want to assert that the `downloadToBuffer` function was called (no parameters used in this implementation) and that the `uploadData` function was called with the content passed to the `AzureBlobStorageService`. We should also assert that the `read` function on our implementation returned the correct value (hint: we'll need to be specific about the returned value for `downloadToBuffer`).

## Challenge 2 - Register a mixin

Many of us are familiar with extension methods (especially in C#).
Mixins are the JS/TS version of extension methods.
There is already a mixin added for concatenating all elements of an array into a string (`extensions/array.ts`).
This is done to show the pattern of adding a mixin.
This kata will be to follow the pattern to add your own.
For simplicity, we'll add one called `duplicate`.
This should simply return an array of all elements, but duplicated in place.
For example:

```typescript
const myArray = [1, 2, 3];
const duplicated = myArray.duplicate();
// duplicated should be [1, 2, 3, 1, 2, 3]
```

As always, for any questions, ping me on chat. Happy to help get unblocked.