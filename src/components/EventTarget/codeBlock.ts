export const sampleUsage = `const target = new EventTarget();
const logHello = () => console.log('hello');
const logWorld = () => console.log('world');

target.addEventListener('hello', logHello);
target.addEventListener('world', logWorld);

target.dispatchEvent('hello');
target.dispatchEvent('world');

target.removeEventListener('hello', logHello);

target.dispatchEvent('hello');
target.dispatchEvent('world');`;

export const solutionCode = `class EventTarget {
  events;

  constructor() {
    this.events = {};
  }

  addEventListener = (eventName, callback) => {
    if (!this.events[eventName]) {
      this.events[eventName] = new Set();
    }
    this.events[eventName].add(callback);
  };

  removeEventListener = (eventName, callback) => {
    this.events?.[eventName]?.delete(callback);
  };

  dispatchEvent = (eventName) => {
    if (this.events?.[eventName]?.size) {
      for (const cb of this.events?.[eventName]) {
        cb();
      }
    }
  };
}`;
