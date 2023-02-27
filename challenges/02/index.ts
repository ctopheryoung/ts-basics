// Implement forEach, filter, and map using reduce. Must be fully typesafe.

function forEach<T>(items: T[], callbackFn: (v: T) => void): void {
  items.reduce((acc, currentValue) => {
    callbackFn(currentValue);
    return undefined;
  }, undefined);
}
forEach([1, 2, "3"], (v) => console.log(v));

function filter<T>(items: T[], callbackFn: (v: T) => boolean): T[] {
  return items.reduce(
    (acc: T[], currentValue) =>
      callbackFn(currentValue) ? [...acc, currentValue] : acc,
    []
  );
}
console.log(filter([1, 2, 3, 4, 5], (v) => v > 4));

function map<T, K>(items: T[], callbackFn: (v: T) => K): K[] {
  return items.reduce(
    (acc: K[], currentValue) => [...acc, callbackFn(currentValue)],
    []
  );
}
console.log(map([1, 2, 3], (v) => v * 2));
