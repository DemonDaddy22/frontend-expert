# Curry

_Tag_: **JavaScript**

Write a `curry` function that takes in a required `callback` function and returns a curried version of that function. This `callback` function can take in any number of arguments, including none at all.

If the curried function is called with arguments, it should return a new function, which can be called with more arguments, to be passed to the underlying `callback`.

If the curried function (or one of the returned new functions) is called with no arguments, this should be considered the end of the curried function calls, and the `callback` should be called with every argument that was passed, in the correct order.

For simplicity, you don't need to worry about binding a `this` context (i.e., you can assume that the `callback` doesn't reference `this`).

### Sample Usage

```javascript
const sum = (...numbers) => numbers.reduce((total, number) => total + number, 0);
const curriedSum = curry(sum);

curriedSum(); // 0
curriedSum(1)(); // 1
curriedSum(1)(2)(); // 3
curriedSum(1, 2)(3)(4, 5, 6)(); // 21
curriedSum(1); // [Function]
curriedSum(1, 2)(3); // [Function]
```
