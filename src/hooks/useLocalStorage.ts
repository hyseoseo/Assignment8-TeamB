import { useState, useEffect } from 'react';
import { UseStorage } from './types';

const useLocalStorage = <T extends string, U>(key: T, initialValue: U): UseStorage<U> => {
  const [value, setValue] = useState<U>(() => {
    const savedValue: string | null = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
