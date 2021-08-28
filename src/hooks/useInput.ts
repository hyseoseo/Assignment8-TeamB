import { useState } from 'react';
import { ChangeEvent, IuseInput } from './types';

const useInput = (initialValue: string): IuseInput => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: ChangeEvent): void => {
    const value: string = e.target.value;
    setValue(value);
  };

  const clearValue = (): void => {
    setValue('');
  };

  return { value, clearValue, handleChange };
};

export default useInput;
