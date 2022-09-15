import { isEmptyList } from '..';

test('isEmptyList on empty list', () => {
  expect(isEmptyList([])).toBeTruthy();
});

test('isEmptyList on non-empty lists', () => {
  expect(isEmptyList([[]])).toBeFalsy();
  expect(isEmptyList([1, 2, 3])).toBeFalsy();
  expect(isEmptyList([1, 'true', {}])).toBeFalsy();
});

test('isEmptyList on null and undefined values', () => {
  expect(isEmptyList(null)).toBeTruthy();
  expect(isEmptyList(undefined)).toBeTruthy();
});

test('isEmptyList on string values', () => {
  expect(isEmptyList('')).toBeTruthy();
  expect(isEmptyList('hello world')).toBeTruthy();
});

test('isEmptyList on numeric values', () => {
  expect(isEmptyList(1)).toBeTruthy();
  expect(isEmptyList(0)).toBeTruthy();
  expect(isEmptyList(-1)).toBeTruthy();
});

test('isEmptyList on boolean values', () => {
  expect(isEmptyList(true)).toBeTruthy();
  expect(isEmptyList(false)).toBeTruthy();
});

test('isEmptyList on object values', () => {
  expect(isEmptyList({})).toBeTruthy();
  expect(isEmptyList({ key: [] })).toBeTruthy();
});
