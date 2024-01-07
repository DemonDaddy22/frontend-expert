# Event Target

_Tag_: **JavaScript**

Implement an `EventTarget` class (similar to the EventTarget interface of the DOM), which keeps track of event listeners and dispatches events.

Your `EventTarget` class should have the following three methods:

1. `addEventListener` - This function takes in two arguments: the name of an event as a string and a callback function, to be called when the event is dispatched to the target.

   For example, `target.addEventListener('click', onClick)` should make it such that the `onClick` callback is called when the 'click' event is dispatched to the `target`.

   A target should be able to have multiple event listeners for the same event (for example, `onClick1` and `onClick2`, both attached to the `'click'` event). However, adding the same exact event listener twice (with the same event and the same callback) should have no effect.

2. `removeEventListener` - This function takes in the same arguments as `addEventListener` and removes the relevant event listener.

   For example, `target.removeEventListener('click', onClick)` should undo the effects of the `addEventListener` call in the bullet point above.

   If there's no current event listener for the passed-in arguments, `removeEventListener` should have no effect. Also, if two different callbacks have been added for the same `'click'` event (e.g., `onClick1` and `onClick2`), removing one shouldn't remove the other.

3. `dispatchEvent` - This function takes in the name of an event as a string. If there are no event listeners for that event, nothing should happen. Otherwise, event listeners that do exist for that event should have their callback functions invoked.

   For example, given the event listener added in the first bullet point and assuming it hadn't been removed, `dispatchEvent('click')` would call `onClick`.

   Events can be dispatched multiple times, and each time, every associated callback should be invoked.

Note that different event targets should be completely isolated from one another. In other words, if we had two event targets with the same event listener, dispatching the appropriate event to one target shouldn't trigger the other target.

### Sample Usage

```javascript
const target = new EventTarget();
const logHello = () => console.log('hello');
const logWorld = () => console.log('world');

target.addEventListener('hello', logHello);
target.addEventListener('world', logWorld);

target.dispatchEvent('hello');
target.dispatchEvent('world');

target.removeEventListener('hello', logHello);

target.dispatchEvent('hello');
target.dispatchEvent('world');
```

### Sample Output

```javascript
// Console logs:
hello; // From the first 'hello' dispatch
world; // From the first 'world' dispatch
world; // From the second 'world' dispatch
// The second 'hello' dispatch does nothing because
// the event listener was removed above it
```
