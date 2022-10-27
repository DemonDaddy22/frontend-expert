export const sampleUsage1 = `describe('Passing Test Suite', () => {
  it('Passing Test Case #1', () => {
    expect('foo').toExist();
    expect(1 + 1).toBe(2);
  });

  it('Passing Test Case #2', () => {
    expect({}).toBeType('object');
  });
});`;

export const sampleUsage2 = `describe('Failing Test Suite', () => {
  it('Passing Test Case', () => {
    expect(0).toBe(0);
  });

  it('Failing Test Case', () => {
    expect(true).toBe(true);
    expect(true).toBe(false);
  });

  it('Unreachable Test Case', () => {
    expect('foo').toBe('bar');
  });
});`;

export const solutionCode = `const describe = (testSuiteName, callback) => {
  try {
    console.log(\`beginning test suite \${testSuiteName}\`);
    callback();
    console.log(\`successfully completed test suite \${testSuiteName}\`)
  } catch (err) {
    console.error(\`failed running test suite \${testSuiteName} on \${err.message}\`);
  }
};

const it = (testCaseName, callback) => {
  try {
    console.log(\`beginning test case \${testCaseName}\`);
    callback();
    console.log(\`successfully completed test case \${testCaseName}\`)
  } catch (err) {
    throw new Error(\`test case \${testCaseName} with error message \${err.message}\`);
  }
};

const expect = (actual) => {
  return {
    toExist: () => {
      if (actual !== null && actual !== undefined) {
        return true;
      }
      throw new Error(\`expected value to exist but got \${actual}\`);
    },
    toBe: (expected) => {
      if (actual === expected) {
        return true;
      }
      throw new Error(\`expected \${JSON.stringify(actual)} to be \${JSON.stringify(expected)}\`);
    },
    toBeType: (type) => {
      const typeOfActual = typeof actual;
      if (typeOfActual === type) {
        return true;
      }
      throw new Error(\`expected \${JSON.stringify(actual)} to be of type \${type} but got \${typeOfActual}\`);
    },
  };
};`;
