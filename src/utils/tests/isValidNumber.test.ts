import { isValidNumber } from '..';

test('isValidNumber on numeric values', () => {
  expect(isValidNumber(1)).toBeTruthy();
  expect(isValidNumber(0)).toBeTruthy();
  expect(isValidNumber(-1)).toBeTruthy();
});

test('isValidNumber on numeric strings', () => {
  expect(isValidNumber('1')).toBeTruthy();
  expect(isValidNumber('0')).toBeTruthy();
  expect(isValidNumber('-1')).toBeTruthy();
});

test('isValidNumber on non-numeric strings', () => {
  expect(isValidNumber('')).toBeFalsy();
  expect(isValidNumber('hello world')).toBeFalsy();
});

test('isValidNumber on null, undefined and NaN values', () => {
  expect(isValidNumber(null)).toBeFalsy();
  expect(isValidNumber(undefined)).toBeFalsy();
  expect(isValidNumber(NaN)).toBeFalsy();
});

test('isValidNumber on boolean values', () => {
  expect(isValidNumber(true)).toBeFalsy();
  expect(isValidNumber(false)).toBeFalsy();
});

test('isValidNumber on object values', () => {
  expect(isValidNumber({})).toBeFalsy();
  expect(isValidNumber([])).toBeFalsy();
});
