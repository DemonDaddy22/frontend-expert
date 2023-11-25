import { LOREM_IPSUM } from '../constants';

/**
 *
 * @function isEmptyString - Checks if passed value is an empty string or not
 * @param {string} value
 * @returns `boolean` indicating whether `value` is an empty string
 *
 */
export const isEmptyString = <T>(value: string | T): boolean => typeof value !== 'string' || !value?.trim()?.length;

/**
 *
 * @function isValidNumber - Checks if passed value is a valid number or not
 * @param {number | string} value
 * @returns `boolean` indicating whether `value` is a valid number
 *
 */
export const isValidNumber = <T>(value: number | string | T): boolean =>
  ['number', 'string'].includes(typeof value) && value !== '' && !isNaN(Number(value));

/**
 *
 * @function isEmptyList - Checks if passed object is an empty list or not
 * @param {Array<any>} obj
 * @returns `boolean` indicating whether `obj` is an empty list
 *
 */
export const isEmptyList = <T>(obj: Array<T> | T): boolean =>
  !Array.isArray(obj) || (Array.isArray(obj) && obj.length === 0);

/**
 *
 * @function isEmptyObject - Checks if passed object is an empty object or not
 * @param {Object} obj
 * @returns `boolean` indicating whether `obj` is an empty object
 *
 */
export const isEmptyObject = <T>(obj: Object | T): boolean =>
  !obj || typeof obj !== 'object' || Array.isArray(obj) || Object.keys(obj).length === 0;

/**
 *
 * @function truncateStringToLength - Truncates passed value to specified length
 * @param {string} value
 * @param {number} length
 * @returns truncated `value` if its length is greater than or equal to `length`
 *
 */
export const truncateStringToLength = (value: string, length: number): string => {
  if (isEmptyString(value) || !isValidNumber(length) || length <= 0) return value;
  return value?.length <= length ? value : `${value?.substring(0, length)}...`;
};

/**
 *
 * @function createListOfSize - Creates a list of length `size` containing integers from `start`
 * @param {number} size - specifies size of list
 * @param {number} start - specifies first value of list
 * @returns list containing integers from start to start + size - 1
 *
 */
export const createListOfSize = (size: number, start: number = 1): number[] =>
  size > 0 ? Array.from(Array(size)).map(() => start++) : [];

/**
 *
 * @function copyTextToClipboard - Copies `text` to the clipboard
 * @param {string} text - specifies the text to be copied
 * @returns promise of a boolean value depicting whether the copy was successful
 *
 */
export const copyTextToClipboard = async (text: string = ''): Promise<boolean> => {
  if (isEmptyString(text)) return false;

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    return false;
  }
};

/**
 *
 * @function getLoremIpsum - Gets a random lorem ipsum text from a constant array
 * @returns string value of the lorem ipsum text
 *
 */
export const getLoremIpsum = (): string => {
  const randomIndex = Math.floor(Math.random() * LOREM_IPSUM.length);
  return LOREM_IPSUM[randomIndex];
};
