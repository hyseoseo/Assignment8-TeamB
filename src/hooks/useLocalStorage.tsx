import React, { useState, useEffect } from 'react';

type Storage<T> = [T, React.Dispatch<T | ((prevState: T) => T)>];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useLocalStorage = <_, T>(key: string, initialValue: T): Storage<T> => {
  const [value, setValue] = useState<T>(() => {
    localStorage.clear();
    const savedValue: string | null = localStorage.getItem(key);

    return savedValue ? JSON.parse(savedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
