# ArrayMethods

_Tag_: **JavaScript**

Without calling `Array.prototype.map()`, `Array.prototype.filter()`, `Array.prototype.reduce()`, or `Array.prototype.forEach()`, implement the following three similar functions on the Array prototype:

1. `myMap(callback)` - Without mutating the original array, this function should call the passed `callback` function on every element of the array and return a new array containing the results of all these calls, in the corresponding order.

   The callback function can take in up to three parameters:

   1. The current value in the array.
   2. The current index in the array.
   3. The array itself.

2. `myFilter(callback)` - Without mutating the original array, this function should call the passed `callback` function on every element of the array and return a new array containing the values of the original array that, when passed to the callback function, returned `true`. These values should maintain their original order.

   The callback function takes in the same arguments as the ones that the callback function in `myMap` takes in.

3. `myReduce(callback, initialValue)` - Without mutating the original array, this function should call the passed `callback` function on every element of the array and return the result of the last call to the callback.

   The callback function can take in up to four parameters:

   1. The accumulator, which is the return value of the previous call to the callback. On the first call to the callback, the accumulator should be set to the `initialValue`. If the `initialValue` is `undefined`, then it should be set to the first value of the array, and the callback should skip the first element in the array and be called directly on the second element.
   2. The current value in the array.
   3. The current index in the array.
   4. The array itself.

If the array contains no elements, the `initialValue` should be returned. Note that this differs slightly from the `Array.prototype.reduce` function.

### Sample Usage

```javascript
const array = [1, 2, 3];

const mappedArray = array.myMap((value, i, arr) => {
  return value + i + arr[1];
});

const filteredArray = array.myFilter((value, i, arr) => {
  return value + i + arr[1] > 5;
});

const reducedValue = array.myReduce((accumulator, value, i, arr) => {
  return accumulator + value + i + arr[1];
}, 3);

console.log(mappedArray);
console.log(filteredArray);
console.log(reducedValue);
```

### Sample Output

```javascript
// Console logs:
[3, 5, 7][3]; // From my myMap // From my myFilter
18; // From my myReduce
```
