import React, { useState } from 'react';
import { Itodo, OPTIONS, Status } from 'components/todo/type';
import { FILTER_OPTION } from 'config';

interface IfilterOption {
  status: Status[];
  isImportant: string[];
}

const InitialFilterOption: IfilterOption = {
  status: [],
  isImportant: [],
};

const useFilter = (todos: Itodo[]) => {
  const [filteredItem, setFilteredItem] = useState<Itodo[]>([]);
  const [filterOption, setFilterOption] = useState<IfilterOption>(InitialFilterOption);

  const changeIntoStatus = (value: string): Status => {
    const status: Status = OPTIONS.find((option) => option === value)!;
    return status;
  };

  const setFilterStatus = (input: string, isChecked: boolean): void => {
    const value: Status = changeIntoStatus(input);
    const checkedStatus: Status[] = isChecked
      ? filterOption.status.concat(value)
      : filterOption.status.filter((item) => item !== value);
    setFilterOption({
      ...filterOption,
      status: checkedStatus,
    });
  };

  const setFilterImportant = (value: string, isChecked: boolean): void => {
    const checkedImportant: string[] = isChecked
      ? filterOption.isImportant.concat(value)
      : filterOption.isImportant.filter((item) => item !== value);
    setFilterOption({
      ...filterOption,
      isImportant: checkedImportant,
    });
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name == FILTER_OPTION.STATUS) {
      setFilterStatus(e.target.value, e.target.checked);
    } else {
      setFilterImportant(e.target.value, e.target.checked);
    }
  };

  const filteredTodos = (filter: string, todos: Itodo[]): Itodo[] => {
    return filter == FILTER_OPTION.STATUS // or FILTER.IMPORTANT
      ? todos.filter((item: Itodo) => filterOption.status.includes(changeIntoStatus(item.status)))
      : todos.filter((item: Itodo) =>
          filterOption.isImportant.includes(item.isImportant.toString()),
        );
  };

  const handleSubmit = () => {
    let filteredTodo: Itodo[] = [];
    if (!filterOption.isImportant.length) {
      filteredTodo = filteredTodos(FILTER_OPTION.STATUS, todos);
    } else if (!filterOption.status.length) {
      filteredTodo = filteredTodos(FILTER_OPTION.IMPORTANT, todos);
    } else {
      filteredTodo = todos
        .filter((item: Itodo) => filterOption.status.includes(changeIntoStatus(item.status)))
        .filter((item: Itodo) => filterOption.isImportant.includes(item.isImportant.toString()));
    }
    setFilteredItem(filteredTodo);
  };

  return { handleCheck, handleSubmit };
};

export default useFilter;