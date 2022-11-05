export const contextExample = `const object = {};
object.throttled = throttle(someCallback, 1000);
object.throttled();`;

export const sampleUsage1 = `const throttled = throttle(console.log, 3000);
document.addEventListener('keypress', () => throttled(currentTime));

// currentTime = 0ms - user starts typing.
// Callback function fires immediately: logs the currentTime at the last keypress, which was 0ms.
// currentTime = 1000ms - user stops typing.
// currentTime = 3000ms - 3000ms have elapsed since last log.
// Callback function fires immediately: logs the currentTime at the last keypress, which was 1000ms.
// currentTime = 7000ms - user starts typing.
// Callback function fires immediately: logs the currentTime at the last keypress, which was 7000ms.
// currentTime = 9000ms - user stops typing.
// currentTime = 10000ms - 3000ms have elapsed since last log.`;

export const sampleUsage2 = `const throttled = throttle(console.log, 3000);
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
// currentTime = 9000ms - throttled.cancel() is called.`;

export const solutionCode = `function throttle (callback, delay) {
  let timeout = null;
  let previousTimestamp = 0;

  function throttled (...args) {
    const currentTimestamp = Date.now();
    const elapsedTime = currentTimestamp - previousTimestamp;
    const delayRemaining = delay - elapsedTime;
    if (delayRemaining <= 0) {
      callback.apply(this, args);
      previousTimestamp = currentTimestamp;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback.apply(this, args);
        previousTimestamp = Date.now();
      }, delayRemaining);
    }
  }

  throttled.__proto__.cancel = function () {
    clearTimeout(timeout);
  };

  return throttled;
}`;
