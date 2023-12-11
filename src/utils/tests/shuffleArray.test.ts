import { shuffleArray } from '..';

test('shuffleArray with empty array as argument', () => {
  const array: any[] = [];
  const list = shuffleArray([...array]);
  expect(list).toBeInstanceOf(Array);
  expect(list.length).toBe(array.length);
});

test('shuffleArray with non-empty array as argument', () => {
  const array = [1, 2, 3, 3, 2, 1];
  const list = shuffleArray([...array]);
  expect(list).toBeInstanceOf(Array);
  expect(list.length).toBe(array.length);
});

test('shuffleArray with array argument shuffled in-place', () => {
  const array = [1, 2, 3, 3, 2, 1];
  const list = shuffleArray(array);
  expect(list).toBeInstanceOf(Array);
  expect(list.length).toBe(array.length);
  expect(list).toBe(array);
});
