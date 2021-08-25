import React, { useState } from 'react';
import { Status } from 'components/todo/type';

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

interface IuseInput {
  value: string | Status;
  handleChange: (e: ChangeEvent) => void;
}

const useInput = (initialValue: string | Status): IuseInput => {
  const [value, setValue] = useState<string | Status>(initialValue);

  const handleChange = (e: ChangeEvent): void => {
    const value: string | Status = e.target.value;
    setValue(value);
  };

  return { value, handleChange };
};

export default useInput;
