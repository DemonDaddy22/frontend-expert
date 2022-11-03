# Promisify

_Tag_: **JavaScript**

Write a `promisify` function (similar to the `util.promisify` Node.js function) that takes in a required `callback` function and returns a new "promisifed" version of that function.

The `callback` function can take in any number of parameters, but its last parameter is guaranteed to be another callback function, which takes in two parameters: an error and a value. We'll call this other callback function `handleErrorAndValue` for simplicity.

For example, the following `adder` function could be passed to the `promisify` function:

```javascript
function adder(x, y, handleErrorAndValue) {
  const value = x + y;
  if (typeof value !== 'number') {
    const error = new Error('Not a number');
    handleErrorAndValue(error, null);
  } else {
    handleErrorAndValue(null, value);
  }
}
```

It adds two values `x` and `y`, and in the case that the result isn't a number, it calls the `handleErrorAndValue` function with a new error; otherwise, it passes the summed value as the `handleErrorAndValue` function's second parameter with a `null` error.

If this `adder` function were passed to the `promisify` function, the resulting promisified function would work just like `adder` does, except that it would return a new `Promise`. If the `handleErrorAndValue` function were to get called with an error, the returned promise would be rejected with that error; otherwise, the returned promise would be resolved with the value parameter.

Below is an example of the promisified `adder` function in action:

```javascript
const promisifiedAdder = promisify(adder);

promisifiedAdder(1, 2)
  .then(console.log) // This would log 3
  .catch(console.error);

promisifiedAdder(1, 'foobar').then(console.log).catch(console.error); // An error would be caught and logged
```

To be clear, in order to properly call the main `callback` function (`adder`, in the example above), you'll need to implement the `handleErrorAndValue` function, which will have to be passed to the main `callback` function as its last argument.

Also, note that the main callback function should have the `this` context of the promisified function caller. For example, in the following code snippet, the `adder` callback should be called with the `this` context of the `object`:

```javascript
const object = {};
object.promisifiedAdder = promisify(adder);
object.promisifiedAdder();
```
