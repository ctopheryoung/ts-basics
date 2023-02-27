// Implement forEach, filter, and map using reduce. Must be fully typesafe.

function forEach<T>(items: T[], callbackFn: (v: T) => void): void {
  items.reduce((acc, currentValue) => {
    callbackFn(currentValue);
    return undefined;
  }, undefined);
}
forEach([1, 2, 3], (v) => console.log(v));

function filter() {
  // implement using reduce
}

function map() {
  // implement using reduce
}
