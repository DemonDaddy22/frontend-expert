export const sampleUsage = `const [func, setFunc] = useState(() => {
  return () => console.log('First');
});
const [delay, setDelay] = useState(2000);
useInterval(func, delay);

// After 2 seconds: First is logged

// After 1 more second:
setDelay(3000);

// After 3 more seconds, First is logged

// After 1 more second:
setFunc(() => {
  return () => console.log('Second');
});

// After 2 more seconds, Second is logged
`;

export const solutionCode = `// useInterval hook

import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay?: number) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    let intervalId: NodeJS.Timer | undefined;
    if (delay) {
      clearInterval(intervalId);
      intervalId = setInterval(callbackRef.current, delay);
    }

    return () => clearInterval(intervalId);
  }, [delay]);
};

export default useInterval;
`;
