import { getLoremIpsum } from '..';
import { LOREM_IPSUM } from '../../constants';

test('getLoremIpsum with no input', () => {
  const loremIpsum = getLoremIpsum();
  expect(LOREM_IPSUM.includes(loremIpsum)).toBeTruthy();
});
