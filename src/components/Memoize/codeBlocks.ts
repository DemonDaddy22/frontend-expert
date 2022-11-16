export const sampleUsage = `const callback = (...args) => args;

const memoized = memoize(callback);
memoized(123); // calls callback, returns 123
memoized(123); // returns 123
memoized(123, 'abc'); // calls callback, returns [123, 'abc']

const memoized2 = memoize(callback, args => args[0]);
memoized2(123); // calls callback, returns 123
memoized2(123); // returns 123
memoized2(123, 'abc'); // returns 123
memoized2('abc', 123); // calls callback, returns ['abc', 123]
memoized2('abc'); // returns ['abc', 123]`;

export const solutionCode = `function memoize (callback, resolver) {
  const cache = {};

  function getCacheKey (args) {
    return resolver ? resolver(...args) : JSON.stringify(args);
  }

  function memoized (...args) {
    const cacheKey = getCacheKey(args);
    if (!memoized.has(...args)) {
      cache[cacheKey] = callback(...args);
    }
    return cache[cacheKey];
  }

  memoized.delete = (...args) => {
    const cacheKey = getCacheKey(args);
    delete cache[cacheKey];
  };

  memoized.clear = () => {
    Object.keys(cache).forEach((key) => delete cache[key]);
  }

  memoized.has = (...args) => {
    const cacheKey = getCacheKey(args);
    return cache.hasOwnProperty(cacheKey);
  }

  return memoized;
}`;
