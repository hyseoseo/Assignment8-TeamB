import React from 'react';
import { css } from '@emotion/react';
import { BOX_STYLE, COLOR_STYLE, FONT_SIZE_STYLE, MainBtn } from 'styles';
import { getCurrentDate } from 'utils';
import { FilterType, Status } from './type';
import { TodoCreate, TodoFilter } from 'components/todo';

interface ITodoHeadProps {
  createTodo: (value: string) => void;
  sortTodo: () => void;
  filterList: (filterType: FilterType, status?: Status) => void;
}

const TodoHead: React.FC<ITodoHeadProps> = ({ createTodo, sortTodo, filterList }) => {
  const curDate = getCurrentDate();

  return (
    <header css={Header}>
      <h1 css={DateStyle}>{curDate}</h1>
      <TodoCreate createTodo={createTodo} />
      <h2 css={HeadingFilter}>Filter by tags</h2>
      <div css={BtnsContainer}>
        <TodoFilter filterList={filterList} />
        <button css={SortBtn} onClick={sortTodo}>
          Sort by newest
        </button>
      </div>
    </header>
  );
};

export default TodoHead;

const Header = css`
  width: 100%;
  background-color: ${COLOR_STYLE.white};
  padding: 1.5rem 1.75rem;
  border-radius: 5px;
  box-shadow: ${BOX_STYLE.shadow};
`;

const DateStyle = css`
  text-align: center;
  font-size: ${FONT_SIZE_STYLE.medium};
  color: ${COLOR_STYLE.greyDarkest};
  margin-bottom: 1.25rem;
`;

const HeadingFilter = css`
  color: ${COLOR_STYLE.greyDarkest};
  font-size: ${FONT_SIZE_STYLE.mediumSmall};
  margin-bottom: 0.5rem;
`;

const BtnsContainer = css`
  display: flex;
  justify-content: space-between;
`;

const SortBtn = css`
  ${MainBtn}

  &:hover {
    transform: translateY(0);
    background-color: ${COLOR_STYLE.primary};
    color: ${COLOR_STYLE.white};
  }

  &:active {
    transform: translateY(-3px);
  }
`;
