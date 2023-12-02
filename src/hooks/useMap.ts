import { useCallback, useState } from 'react';

const useMap = (initialValue?: Array<[any, any]>) => {
  const [map, setMap] = useState(() => new Map(initialValue));

  const setValue = useCallback(<K, V>(key: K, value: V) => {
    setMap((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.set(key, value);
      return newMap;
    });
  }, []);

  const deleteValue = useCallback(<T>(key: T) => {
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
