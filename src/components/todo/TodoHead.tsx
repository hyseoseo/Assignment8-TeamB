import React from 'react';
import { css } from '@emotion/react';
import { BOX_STYLE, COLOR_STYLE, FONT_SIZE_STYLE } from 'styles';
import { getCurrentDate } from 'utils';
import { FilterType, Status } from './type';
import { TodoCreate, TodoController } from 'components/todo';

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
      <TodoController filterList={filterList} sortTodo={sortTodo} />
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
