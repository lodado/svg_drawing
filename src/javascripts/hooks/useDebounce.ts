import { useEffect, useState } from 'react';
import { DEBOUNCE_CYCLE } from '@Global/constant';

interface DebounceType<T> {
  value: T;
  delayTime?: number;
}

export default function useDebounce<T>({ value, delayTime }: DebounceType<T>) {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  const delay = delayTime ?? DEBOUNCE_CYCLE;

  useEffect(() => {
    const EventHandler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(EventHandler);
    };
  }, [value]);

  return debounceValue;
}
