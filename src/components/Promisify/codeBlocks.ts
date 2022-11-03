export const adder = `function adder (x, y, handleErrorAndValue) {
  const value = x + y;
  if (typeof value !== 'number') {
    const error = new Error('Not a number');
    handleErrorAndValue(error, null);
  } else {
    handleErrorAndValue(null, value);
  }
}`;

export const promisifiedAdder = `const promisifiedAdder = promisify(adder);

promisifiedAdder(1, 2)
  .then(console.log)  // This would log 3
  .catch(console.error);

promisifiedAdder(1, 'foobar')
  .then(console.log)
  .catch(console.error);  // An error would be caught and logged
`;

export const contextExample = `const object = {};
object.promisifiedAdder = promisify(adder);
object.promisifiedAdder();`;

export const solutionCode = `function promisify (callback) {
  return function (...args) {
    return new Promise ((resolve, reject) => {
      const handleErrorAndValue = (error, data) => {
        if (error === null) {
          resolve(data);
        } else {
          reject(error);
        }
      };
      callback.call(this, ...args, handleErrorAndValue);
    });
  };
}`;
