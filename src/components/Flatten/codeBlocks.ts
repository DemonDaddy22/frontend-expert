export const sampleUsage = `flatten(1); // 1
flatten([]); // []
flatten([1, 2, [3, 4, [], 5]]); // [1, 2, 3, 4, 5]
flatten({}); // {}
flatten({
  a: null,
  b: undefined,
  c: { d: true, e: 4, f: {}, g: { h: 5 } } }
); // { a: null, b: undefined, d: true, e: 4, h: 5 }
flatten([
  1,
  2,
  [3],
  { a: 4, b: { c: 5, d: [6, 7, [8, 9, [10]] } }]
); // [1, 2, 3, { a: 4, c: 5, d: [6, 7, 8, 9, 10] }]`;

export const solutionCode = `function flatten (value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return flattenArray(value);
  }

  return flattenObject(value);
}

function flattenArray (value) {
  let flattenedArray = [];

  for (let elm of value) {
    if (typeof elm !== 'object' || elm === null) {
      flattenedArray = flattenedArray.concat(elm);
    } else if (Array.isArray(elm)) {
      flattenedArray = flattenedArray.concat(flattenArray(elm));
    } else {
      flattenedArray = flattenedArray.concat(flattenObject(elm));
    }
  }

  return flattenedArray;
}

function flattenObject (value) {
  let flattenedObject = {};

  for (let [key, elm] of Object.entries(value)) {
    if (typeof elm !== 'object' || elm === null) {
      flattenedObject[key] = elm;
    } else if (Array.isArray(elm)) {
      flattenedObject[key] = flattenArray(elm);
    } else {
      Object.assign(flattenedObject, flattenObject(elm));
    }
  }

  return flattenedObject;
}`;
