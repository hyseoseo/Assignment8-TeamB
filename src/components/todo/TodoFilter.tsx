import React, { useState } from 'react';
import { MainBtn, MainSelectedBtn } from 'styles';
import { FilterType, OPTIONS, Status } from 'components/todo/type';

interface Iprop {
  filterList: (filterType: FilterType, status?: Status) => void;
}

const TodoFilter: React.FC<Iprop> = ({ filterList }) => {
  const [currentFilter, setCurrentFilter] = useState<FilterType | Status>(FilterType.none);

  const filterByBookmark = () => {
    filterList(FilterType.bookmark);
    setCurrentFilter(FilterType.bookmark);
  };
  const filterByStatus = (status: Status) => {
    filterList(FilterType.status, status);
    setCurrentFilter(status);
  };
  const clearFilter = () => {
    filterList(FilterType.none);
    setCurrentFilter(FilterType.none);
  };

  return (
    <div>
      <button
        type="button"
        css={currentFilter === FilterType.bookmark ? MainSelectedBtn : MainBtn}
        onClick={filterByBookmark}
      >
        <span>Bookmark</span>
      </button>
      {OPTIONS.map((option, index) => (
        <button
          type="button"
          key={index}
          css={currentFilter === option ? MainSelectedBtn : MainBtn}
          onClick={() => filterByStatus(option)}
        >
          <span>{option}</span>
        </button>
      ))}
      <button
        type="button"
        css={currentFilter === FilterType.none ? MainSelectedBtn : MainBtn}
        onClick={clearFilter}
      >
        <span>Clear</span>
      </button>
    </div>
  );
};

export default TodoFilter;
