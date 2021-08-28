import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { COLOR_STYLE, FONT_SIZE_STYLE, MainBtn, MainSelectedBtn } from 'styles';
import { FilterType, OPTIONS, Status } from 'components/todo/type';

interface Iprop {
  filterList: (filterType: FilterType, status?: Status) => void;
}

const TodoFilter: React.FC<Iprop> = ({ filterList }) => {
  const [currentFilter, setCurrentFilter] = useState<FilterType | Status>(FilterType.none);

  useEffect(() => {
    clearFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <h2 css={HeadingFilter}>Filter by tags</h2>
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
          <span>None</span>
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;

const HeadingFilter = css`
  color: ${COLOR_STYLE.greyDarkest};
  font-size: ${FONT_SIZE_STYLE.mediumSmall};
  margin-bottom: 0.5rem;
`;
