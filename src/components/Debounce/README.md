# Debounce

_Tag_: **JavaScript**

Write a debounce function that takes in a required callback function, a required delay in milliseconds, and an optional immediate boolean, which defaults to false.

Calling debounce(callback, delay) should return a new "debounced" version of the callback function, which takes in the same parameters as the callback, and which, when executed, should call the callback after delay milliseconds have passed since the last call to this debounced function.

For example, repeatedly calling a debounced function which had a delay of 3000ms every second would never call the underlying callback function, because the delay of 3000ms would never elapse since the last call.

If the immediate argument is true, then the first call to the debounced function should immediately execute the underlying callback function. However, the callback function shouldn't be able to execute again until delay milliseconds have passed since the last call to the debounced function.

In this case, repeatedly calling a debounced function which had a delay of 3000ms every second would call the underlying callback function once immediately after the first call, and then never again, because the delay of 3000ms would never elapse since the last call.

Note that the underlying callback functions should have the this context of the debounced-function callers. For example, in the following code snippet, the underlying callback should be called with the this context of the object:

```javascript
const object = {};
object.debounced = debounce(someCallback, 1000);
object.debounced();
```

You can assume that the JavaScript timing functions are accurate enough for this question (no need to worry about timeouts not firing at exact same times).

### Sample Usage 1

```javascript
const debounced = debounce(console.log, 3000);
document.addEventListener('keypress', () => debounced(currentTime));

// currentTime = 0ms - user starts typing.
// currentTime = 1000ms - user stops typing.
// currentTime = 4000ms - 3000ms have elapsed since last keypress.
// Callback function fires: logs the currentTime, which is 1000ms.
// currentTime = 7000ms - user starts typing.
// currentTime = 9000ms - user stops typing.
// currentTime = 12000ms - 3000ms have elapsed since last keypress.
// Callback function fires: logs the currentTime, which is 9000ms.
```

### Sample Usage 2

```javascript
const debounced = debounce(console.log, 3000, true);
document.addEventListener('keypress', () => debounced(currentTime));

// currentTime = 0ms - user starts typing.
// Callback function fires immediately: logs the currentTime, which is 0ms.
// currentTime = 3000ms - user stops typing.
// currentTime = 5000ms - user starts typing; 3000ms haven't elapsed since last keypress.
// currentTime = 6000ms - user stops typing.
// currentTime = 9000ms - user starts typing; 3000ms have elapsed since last keypress.
// Callback function fires: logs the currentTime, which is 9000ms.
// currentTime = 12000ms - user stops typing.
```
