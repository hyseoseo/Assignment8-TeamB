import { useState } from 'react';
import { Status } from 'components/todo/type';
import { ChangeEvent, IuseInput } from './types';

const useInput = (initialValue: string | Status): IuseInput => {
  const [value, setValue] = useState<string | Status>(initialValue);

  const handleChange = (e: ChangeEvent): void => {
    const value: string | Status = e.target.value;
    setValue(value);
  };

  return { value, handleChange };
};

export default useInput;
