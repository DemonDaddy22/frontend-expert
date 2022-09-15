import { createListOfSize } from '..';

test('createListOfSize with no start argument and positive size', () => {
  const size = 5;
  const list = createListOfSize(size);
  expect(list).toBeInstanceOf(Array);
  expect(list.length).toBe(size);
  list.forEach((val, index) => expect(val).toBe(index + 1));
});

test('createListOfSize with no start argument and 0 size', () => {
  const size = 0;
  const list = createListOfSize(size);
  expect(list).toBeInstanceOf(Array);
  expect(list.length).toBe(size);
});

test('createListOfSize with no start argument and negative size', () => {
  const size = -2;
  const list = createListOfSize(size);
  expect(list).toBeInstanceOf(Array);
  expect(list.length).toBe(0);
});

test('createListOfSize with start argument', () => {
  const size = 5;
  const start = size * 2;
  const list = createListOfSize(size, start);
  expect(list).toBeInstanceOf(Array);
  expect(list.length).toBe(size);
  list.forEach((val, index) => expect(val).toBe(start + index));
});
