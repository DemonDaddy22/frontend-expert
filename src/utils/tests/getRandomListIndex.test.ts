import { getRandomListIndex } from '..';

test('getRandomListIndex with empty array as argument', () => {
  const array: [] = [];
  const randomIndex = getRandomListIndex(array);
  expect(randomIndex).toBe(-1);
});

test('getRandomListIndex with non-empty array argument', () => {
  const array = [1, 2, 3];
  const randomIndex = getRandomListIndex(array);
  expect(randomIndex).toBeGreaterThanOrEqual(0);
  expect(randomIndex).toBeLessThan(array.length);
});
