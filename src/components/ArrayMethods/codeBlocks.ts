export const sampleUsage = `const array = [1, 2, 3];

const mappedArray = array.myMap((value, i, arr) => {
  return value + i + arr[1];
});

const filteredArray = array.myFilter((value, i, arr) => {
  return (value + i + arr[1]) > 5;
});

const reducedValue = array.myReduce((accumulator, value, i, arr) => {
  return accumulator + value + i + arr[1];
}, 3);

console.log(mappedArray);
console.log(filteredArray);
console.log(reducedValue);`;

export const solutionCode = `Array.prototype.myMap = function (callback) {
  if (!this?.length) return [];
  const mappedArray = [];
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i], i, this));
  }
  return mappedArray;
};

Array.prototype.myFilter = function (callback) {
  if (!this?.length) return [];
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === true) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let resultValue = initialValue !== undefined ? initialValue : this[0];
  const startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < this.length; i++) {
    resultValue = callback(resultValue, this[i], i, this);
  }
  return resultValue;
};`;
