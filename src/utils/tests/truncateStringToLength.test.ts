import { truncateStringToLength } from '..';

test('truncateStringToLength with empty value', () => {
  const value = '';
  const truncatedString = truncateStringToLength(value, 2);
  expect(truncatedString).toBe(value);
});

test('truncateStringToLength with length as 0', () => {
  const value = 'hello world';
  const truncatedString = truncateStringToLength(value, 0);
  expect(truncatedString).toBe(value);
});

test('truncateStringToLength with negative length', () => {
  const value = 'hello world';
  const truncatedString = truncateStringToLength(value, -2);
  expect(truncatedString).toBe(value);
});

test('truncateStringToLength with length greater than the length of value', () => {
  const value = 'hello world';
  const truncatedString = truncateStringToLength(value, value.length * 2);
  expect(truncatedString).toBe(value);
});

test('truncateStringToLength with length same as the length of value', () => {
  const value = 'hello world';
  const truncatedString = truncateStringToLength(value, value.length);
  expect(truncatedString).toBe(value);
});

test('truncateStringToLength with length less than the length of value', () => {
  const value = 'hello world';
  const truncatedString = truncateStringToLength(value, value.length / 2);
  expect(truncatedString).toBe(`${value.slice(0, value.length / 2)}...`);
});
