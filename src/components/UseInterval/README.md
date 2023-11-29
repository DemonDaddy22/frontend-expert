# useInterval

_Tag_: **React Hooks**

Write a `useInterval` custom hook that takes in a required `callback` function, and an optional `delay` as a number in milliseconds.

Calling `useInterval` with a `callback` and a `delay` should create an interval on mount, calling the `callback` function every `delay` milliseconds.

If the component unmounts, the interval should be cancelled. If the `delay` changes, the interval should reset, not executing the function until the new `delay` completes.

If the `delay` is ever set to `null` or `undefined`, the interval should be cancelled.

If the `callback` function changes, the interval should be updated to call the most recent version of the function. However, this should not reset the interval.

### Sample Usage

```jsx
const [func, setFunc] = useState(() => {
  return () => console.log('First');
});
const [delay, setDelay] = useState(2000);
useInterval(func, delay);

// After 2 seconds: First is logged

// After 1 more second:
setDelay(3000);

// After 3 more seconds, First is logged

// After 1 more second:
setFunc(() => {
  return () => console.log('Second');
});

// After 2 more seconds, Second is logged
```
