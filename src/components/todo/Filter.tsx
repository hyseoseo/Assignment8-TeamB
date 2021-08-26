import React from 'react';
import useFilter from 'hooks/useFilter';
import { Itodo, OPTIONS } from 'components/todo/type';
import { FILTER_OPTION } from 'config';

interface filterProps {
  todos: Itodo[];
}

const Filter: React.FC<filterProps> = ({ todos }) => {
  const { handleCheck, handleSubmit } = useFilter(todos);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        {OPTIONS.map((option) => (
          <label>
            <input
              type="checkbox"
              name={FILTER_OPTION.STATUS}
              value={option}
              onChange={handleCheck}
            />
            {option}
          </label>
        ))}
      </fieldset>
      <fieldset>
        {FILTER_ARRAY_ISIMPORTANT.map((item) => (
          <label>
            <input
              type="checkbox"
              name={FILTER_OPTION.IMPORTANT}
              value={item.value}
              onChange={handleCheck}
            />
            {item.label}
          </label>
        ))}
      </fieldset>
      <button type="submit">필터</button>
    </form>
  );
};

export default Filter;

const FILTER_ARRAY_ISIMPORTANT = [
  {
    label: '중요함',
    value: 'true',
  },
  {
    label: '안 중요함',
    value: 'false',
  },
];
