# useStateWithHistory

_Tag_: **React Hooks**

Write a `useStateWithHistory` custom hook that takes in an `initialState` value.

Calling `useStateWithHistory` should work the same as `useState`, but with an added history with the ability to scroll through previous state values.

The `useStateWithHistory` hook should return an array with five entries in this order:

- The current value.
- A setter function to update the value. This function should take in the new value as a parameter, just like the setter function returned by `useState`.
- A function to "go back" to the previous state value. Calling this function should update the state to the previous value, and it should cause a re-render just as setting the state to a new value would. If there is no previous state value, this function should have no effect.
- A function to "go forward" to the next state value. Calling this function should update the state to the next value in the history, and it should cause a re-render just as setting the state to a new value would. If there is no next value in the history, this function should have no effect.
- The history of values as an array, initially containing only the initial value. Every time the setter function is called, the new value should be appended to the end of the history array.

If the setter function is called after having gone backwards to a previous value, the value should be updated to the new value. The new value should be appended to the end of the history array as if "go forwards" had been called until reaching the end of the history array before setting a new value (see sample usage below).

For simplicity, you can assume the `initialState` value and the value passed to the setter function will always be primitives.

### Sample Usage

```jsx
const [
  value, // 10
  setValue, // function
  goBack, // function
  goForward, // function
  history, // [10]
] = useStateWithHistory(10);

setValue(15); // value=15, history=[10, 15]
setValue(20); // value=20, history=[10, 15, 20]
goBack(); // value=15 history=[10, 15, 20]
goBack(); // value=10, history=[10, 15, 20]
goBack(); // value=10, history=[10, 15, 20]
goForward(); // value=15, history=[10, 15, 20]
setValue(25); // value=25, history=[10, 15, 20, 25]
setValue(30); // value=30, history=[10, 15, 20, 25, 30]
goBack(); // value=25, history=[10, 15, 20, 25, 30]
goForward(); // value=30, history=[10, 15, 20, 25, 30]
goForward(); // value=30, history=[10, 15, 20, 25, 30]
```
