export const contextExample = `const object = {};
object.debounced = debounce(someCallback, 1000);
object.debounced();`;

export const sampleUsage1 = `const debounced = debounce(console.log, 3000);
document.addEventListener('keypress', () => debounced(currentTime))

// currentTime = 0ms - user starts typing.
// currentTime = 1000ms - user stops typing.
// currentTime = 4000ms - 3000ms have elapsed since last keypress.
// Callback function fires: logs the currentTime, which is 1000ms.
// currentTime = 7000ms - user starts typing.
// currentTime = 9000ms - user stops typing.
// currentTime = 12000ms - 3000ms have elapsed since last keypress.
// Callback function fires: logs the currentTime, which is 9000ms.`;

export const sampleUsage2 = `const debounced = debounce(console.log, 3000, true);
document.addEventListener('keypress', () => debounced(currentTime))

// currentTime = 0ms - user starts typing.
// Callback function fires immediately: logs the currentTime, which is 0ms.
// currentTime = 3000ms - user stops typing.
// currentTime = 5000ms - user starts typing; 3000ms haven't elapsed since last keypress.
// currentTime = 6000ms - user stops typing.
// currentTime = 9000ms - user starts typing; 3000ms have elapsed since last keypress.
// Callback function fires: logs the currentTime, which is 9000ms.
// currentTime = 12000ms - user stops typing.`;

export const solutionCode = `function debounce (callback, delay, immediate = false) {
  let isImmediatelyCalled = false;
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    if (immediate && !isImmediatelyCalled) {
      callback.apply(this, args);
      isImmediatelyCalled = true;
    }
    timeout = setTimeout(() => {
      !immediate && callback.apply(this, args);
      isImmediatelyCalled = false;
    }, delay);
  };
};`;
