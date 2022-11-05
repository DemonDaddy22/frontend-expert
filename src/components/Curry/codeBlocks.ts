export const sampleUsage = `const sum = (...numbers) => numbers.reduce(
  (total, number) => total + number, 0,
);
const curriedSum = curry(sum);

curriedSum(); // 0
curriedSum(1)(); // 1
curriedSum(1)(2)(); // 3
curriedSum(1, 2)(3)(4, 5, 6)(); // 21
curriedSum(1); // [Function]
curriedSum(1, 2)(3); // [Function]`;

export const solutionCode = `const curry = (callback) => {
  function curried (...args) {
    if (!args.length) return callback.apply(this, args);
    
    return (...newArgs) => {
      if (!newArgs.length) {
        return callback.apply(this, args);
      } else {
        return curried.apply(this, [...args, ...newArgs]);
      }
    }
  }

  return curried;
};`;
