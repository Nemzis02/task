import { useState, useEffect } from 'react';

const DEBOUNCE_INTERVAL = 5000;

const useDebounce = (value, delay = DEBOUNCE_INTERVAL) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
