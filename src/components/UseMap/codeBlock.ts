export const sampleUsage = `const { map, set, delete: del, clear } = useMap([
  ['test', 123],
  [456, 'hello world'],
]);

console.log(map.get('test')); // 123
console.log(map.get(456)); // 'hello world'

set(789, true);

// After rerender:
console.log(map.get('test')); // 123
console.log(map.get(456)); // 'hello world'
console.log(map.get(789)); // true

del(456);

// After rerender:
console.log(map.get('test')); // 123
console.log(map.get(456)); // undefined
console.log(map.get(789)); // true

clear();

// After rerender:
console.log(map.get('test')); // undefined
console.log(map.get(456)); // undefined
console.log(map.get(789)); // undefined`;

export const solutionCode = `// useMap hook

import { useCallback, useState } from 'react';

const useMap = (initialValue?: Array<[any, any]>) => {
  const [map, setMap] = useState(() => new Map(initialValue));

  const setValue = useCallback((key: any, value: any) => {
    setMap((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.set(key, value);
      return newMap;
    });
  }, []);

  const deleteValue = useCallback((key: any) => {
    setMap((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.delete(key);
      return newMap;
    });
  }, []);

  const clearMap = useCallback(() => {
    setMap((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.clear();
      return newMap;
    });
  }, []);

  return {
    map, set: setValue, delete: deleteValue, clear: clearMap,
  };
};

export default useMap;
`;
