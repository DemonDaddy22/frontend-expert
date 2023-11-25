export const sampleUsage = `function SaveValues() {
  const [value, setValue] = useLocalStorage('name', '');
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}`;

export const solutionCode = `// useLocalStorage hook

import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = (key: string, initialValue?: any) => {
  const [value, setValue] = useState<any>(initialValue);

  const setValueInStorage = useCallback((valueToSet: any) => {
    const stringifiedValue = JSON.stringify(valueToSet);
    localStorage.setItem(key, stringifiedValue);
    setValue(valueToSet);
  }, [key]);

  useEffect(() => {
    const parsedValue = JSON.parse(localStorage.getItem(key) ?? 'null');
    if (!parsedValue) {
      localStorage.setItem(key, JSON.stringify(initialValue));
    } else {
      setValue(parsedValue);
    }
  }, [key, initialValue]);

  return [value, setValueInStorage];
};

export default useLocalStorage;
`;
