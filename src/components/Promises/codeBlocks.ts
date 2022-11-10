export const sampleUsage1 = `const promise = new MyPromise((res, rej) => {
  res(10);
});

promise.then((val) => {
  console.log(val);
  return val + 10;
}).then((val) => {
  console.log(val);
  throw val + 10;
}).then((val) => {
  console.log(val);
  return val + 10;
}, (error) => {
  console.log('error: ' + error);
  return error + 20;
}).then((val) => {
  console.log(val);
  throw val + 10;
}).catch((error) => {
  console.log('error: ' + error);
  return error + 10;
}).then((val) => {
  console.log(val);
});

console.log('end'); // this line runs before the then/catch chain.`;

export const sampleUsage2 = `const promise = new MyPromise((res, rej) => {
  res(10);
});

promise.then((val) => {
  console.log(val);
  return val + 10;
});

promise.then((val) => {
  console.log(val);
  return val + 5;
});

console.log('end'); // this line runs before the then/catch chain.`;

export const solutionCode = `const PROMISE_STATES = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

class MyPromise {
  // Write your code here.
  #value = null;
  #state = PROMISE_STATES.PENDING;
  #fulfilledCallbacks = [];
  #rejectedCallbacks = [];

  constructor(executorFunc) {
    // Write your code here.
    try {
      executorFunc(
        (value) => this.#resolve(value),
        (error) => this.#reject(error),
      );
    } catch (error) {
      this.#reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // Write your code here.
    return new MyPromise((resolve, reject) => {
      const fulfilledCallback = () => {
        if (!onFulfilled) return resolve(this.#value);

        queueMicrotask(() => {
          try {
            const value = onFulfilled(this.#value);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      };

      const rejectedCallback = () => {
        if (!onRejected) return reject(this.#value);

        queueMicrotask(() => {
          try {
            const value = onRejected(this.#value);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      };
      
      switch (this.#state) {
        case PROMISE_STATES.FULFILLED:
          fulfilledCallback();
          break;
        case PROMISE_STATES.REJECTED:
          rejectedCallback();
          break;
        case PROMISE_STATES.PENDING:
          this.#fulfilledCallbacks.push(fulfilledCallback);
          this.#rejectedCallbacks.push(rejectedCallback);
          break;
        default:
          throw new Error('Unexpected promise state');
      }
    });
  }

  catch(onRejected) {
    // Write your code here.
    return this.then(null, onRejected);
  }

  #resolve (value) {
    this.#state = PROMISE_STATES.FULFILLED;
    this.#value = value;
    this.#fulfilledCallbacks.forEach((cb) => cb());
  }

  #reject (error) {
    this.#state = PROMISE_STATES.REJECTED;
    this.#value = error;
    this.#rejectedCallbacks.forEach((cb) => cb());
  }

  get state() {
    // Write your code here.
    return this.#state;
  }

  get value() {
    // Write your code here.
    return this.#value;
  }
}`;
