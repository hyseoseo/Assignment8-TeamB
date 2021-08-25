import { useState } from 'react';
import { ChangeEvent, IuseInput } from './types';

const useInput = (initialValue: string = ''): IuseInput => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: ChangeEvent): void => {
    setValue(e.target.value);
  };

  return { value, handleChange };
};

export default useInput;
