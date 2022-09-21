import { isEmptyObject } from '..';

test('isEmptyObject on empty object', () => {
  expect(isEmptyObject({})).toBeTruthy();
});

test('isEmptyObject on non-empty objects', () => {
  expect(isEmptyObject({ key: {} })).toBeFalsy();
  expect(isEmptyObject({ 1: 1, 2: 2 })).toBeFalsy();
});

test('isEmptyObject on null and undefined values', () => {
  expect(isEmptyObject(null)).toBeTruthy();
  expect(isEmptyObject(undefined)).toBeTruthy();
});

test('isEmptyObject on string values', () => {
  expect(isEmptyObject('')).toBeTruthy();
  expect(isEmptyObject('hello world')).toBeTruthy();
});

test('isEmptyObject on numeric values', () => {
  expect(isEmptyObject(1)).toBeTruthy();
  expect(isEmptyObject(0)).toBeTruthy();
  expect(isEmptyObject(-1)).toBeTruthy();
});

test('isEmptyObject on boolean values', () => {
  expect(isEmptyObject(true)).toBeTruthy();
  expect(isEmptyObject(false)).toBeTruthy();
});

test('isEmptyObject on array values', () => {
  expect(isEmptyObject([])).toBeTruthy();
  expect(isEmptyObject([{}])).toBeTruthy();
});
