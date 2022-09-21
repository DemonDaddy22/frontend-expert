import { isEmptyString } from '..';

test('isEmptyString on empty string', () => {
  expect(isEmptyString('')).toBeTruthy();
});

test('isEmptyString on non-empty strings', () => {
  expect(isEmptyString('hello')).toBeFalsy();
  expect(isEmptyString('hello world')).toBeFalsy();
  expect(isEmptyString('123')).toBeFalsy();
});

test('isEmptyString on null and undefined values', () => {
  expect(isEmptyString(null)).toBeTruthy();
  expect(isEmptyString(undefined)).toBeTruthy();
});

test('isEmptyString on numeric values', () => {
  expect(isEmptyString(1)).toBeTruthy();
  expect(isEmptyString(0)).toBeTruthy();
  expect(isEmptyString(-1)).toBeTruthy();
});

test('isEmptyString on boolean values', () => {
  expect(isEmptyString(true)).toBeTruthy();
  expect(isEmptyString(false)).toBeTruthy();
});

test('isEmptyString on object values', () => {
  expect(isEmptyString({})).toBeTruthy();
  expect(isEmptyString([])).toBeTruthy();
});
