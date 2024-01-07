import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay?: number) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (delay) {
      clearInterval(intervalId);
      intervalId = setInterval(callbackRef.current, delay);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [delay]);
};

export default useInterval;
