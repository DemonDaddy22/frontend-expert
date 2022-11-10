export const sampleUsage = `deepEquals(1, 1); // true
deepEquals(1, '1'); // false
deepEquals(null, null); // true
deepEquals(null, undefined); // false
deepEquals([], []); // true
deepEquals({}, {}); // true
deepEquals([], {}); // false
deepEquals({ a: 123, b: { c: [4, 5, 6] } }, { a: 123, b: { c: [4, 5, 6] } }); // true
deepEquals({ a: 123, b: { c: [4, 5, 6] } }, { b: { c: [4, 5, 6] } }); // false
deepEquals([1, 2, [3, 4]], [1, 2, [3, 4]]); // true
deepEquals([1, 2, [3, 4, { a: 'abc' }]], [1, 2, [3, 4, { a: 'abc' }]]); // true`;

export const solutionCode = `function deepEquals(valueOne, valueTwo) {
  if (typeof valueOne !== typeof valueTwo) {
    return false;
  }

  if (typeof valueOne !== 'object') {
    if (Number.isNaN(valueOne) && Number.isNaN(valueTwo)) {
      return true;
    }
    return valueOne === valueTwo;
  }

  else {
    if (valueOne === null || valueTwo === null) {
      return valueOne === valueTwo;
    }
    if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
      return deepEqualsArray(valueOne, valueTwo);
    }
    if (!Array.isArray(valueOne) && !Array.isArray(valueTwo)) {
      return deepEqualsObject(valueOne, valueTwo);
    }
  }

  return false;
}

function deepEqualsArray(valueOne, valueTwo) {
  if (valueOne.length !== valueTwo.length) {
    return false;
  }

  for (let i = 0; i < valueOne.length; i++) {
    if (!deepEquals(valueOne[i], valueTwo[i])) {
      return false;
    }
  }

  return true;
}

function deepEqualsObject(valueOne, valueTwo) {
  const keysOne = Object.keys(valueOne);
  const keysTwo = Object.keys(valueTwo);

  if (keysOne.length !== keysTwo.length) {
    return false;
  }

  for (let i = 0; i < keysOne.length; i++) {
    if (!valueTwo.hasOwnProperty(keysOne[i]) || !deepEquals(valueOne[keysOne[i]], valueTwo[keysOne[i]])) {
      return false;
    }
  }

  return true;
}`;
