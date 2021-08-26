import React from 'react';
import useFilter from 'hooks/useFilter';
import { Itodo, OPTIONS } from 'components/todo/type';
import { FILTER_OPTION, FILTER_ARRAY_ISIMPORTANT } from 'components/todo/type';

interface filterProps {
  todos: Itodo[];
}

const Filter: React.FC<filterProps> = ({ todos }) => {
  const { handleCheck, handleSubmit } = useFilter(todos);

  return (
    <>
      <div>
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
      </div>
      <div>
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
      </div>
      <button type="submit" onClick={handleSubmit}>
        정렬
      </button>
    </>
  );
};

export default Filter;
