# Throttle

_Tag_: **JavaScript**

Write a `throttle` function that takes in a required `callback` function and a required `delay` in milliseconds.

Calling `throttle(callback, delay)` should return a new "throttled" version of the callback function, which takes in the same parameters as the callback, and which, when executed, should call the callback function a maximum of one time per `delay` interval.

The first time the throttled function is called, the underlying callback should run immediately. If the throttled function is called again before the `delay` has passed, the next call to the underlying callback should be scheduled for `delay` milliseconds after the last call to the callback. If the throttled function is called multiple times in a `delay` interval, the arguments from the last call should be used.

For example, repeatedly and continuously calling a throttled function which had a delay of 3000ms would call the underlying callback function exactly once every 3 seconds.

The `throttle` function should also add a `cancel` method to the throttled function (remember, functions are just objects). When this method is called, any scheduled callback should be cancelled.

Note that the underlying callback functions should have the `this` context of the throttled-function callers. For example, in the following code snippet, the underlying callback should be called with the `this` context of the `object`:

```javascript
const object = {};
object.throttled = throttle(someCallback, 1000);
object.throttled();
```

You can assume that the JavaScript timing functions are accurate enough for this question (no need to worry about timeouts not firing at exact times). You also don't need to save the return value of the throttled function; it can return `undefined`.

### Sample Usage #1

```javascript
const throttled = throttle(console.log, 3000);
document.addEventListener('keypress', () => throttled(currentTime));

// currentTime = 0ms - user starts typing.
// Callback function fires immediately: logs the currentTime at the last keypress, which was 0ms.
// currentTime = 1000ms - user stops typing.
// currentTime = 3000ms - 3000ms have elapsed since last log.
// Callback function fires immediately: logs the currentTime at the last keypress, which was 1000ms.
// currentTime = 7000ms - user starts typing.
// Callback function fires immediately: logs the currentTime at the last keypress, which was 7000ms.
// currentTime = 9000ms - user stops typing.
// currentTime = 10000ms - 3000ms have elapsed since last log.
```

### Sample Usage #2

```javascript
const throttled = throttle(console.log, 3000);
document.addEventListener('keypress', () => throttled(currentTime));

// currentTime = 0ms - user starts typing.
// Callback function fires immediately: logs the currentTime at the last keypress, which was 0ms.
// currentTime = 1000ms - user stops typing.
// currentTime = 2000ms - throttled.cancel() is called.
// currentTime = 4000ms - user starts typing.
// Callback function fires immediately: logs the currentTime at the last keypress, which was 4000ms.
// currentTime = 5000ms - user stops typing; then throttled.cancel() is called.
// currentTime = 7000ms - user starts typing.
// Callback function fires immediately: logs the currentTime at the last keypress, which was 7000ms.
// currentTime = 8000ms - user stops typing.
// currentTime = 9000ms - throttled.cancel() is called.
```
