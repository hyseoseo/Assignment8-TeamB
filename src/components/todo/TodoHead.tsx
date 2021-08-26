import React from 'react';
import { css } from '@emotion/react';
import { useModalContext } from 'contexts';
import { getCurrentDate } from 'utils';
import { FilterModal } from 'components/modals';
import { TodoCreate } from 'components/todo';

interface ITodoHeadProps {
  createTodo: (value: string) => void;
  sortTodo: () => void;
}

const TodoHead: React.FC<ITodoHeadProps> = ({ createTodo, sortTodo }) => {
  const { openModal } = useModalContext()!;

  const handleClickFilter = (): void => {
    openModal(FilterModal);
  };

  return (
    <header css={HeadBlock}>
      <h1 css={Time}>{getCurrentDate()}</h1>
      <button onClick={handleClickFilter}>
        <span>filter modal</span>
      </button>
      <TodoCreate createTodo={createTodo} />
      <button onClick={sortTodo}>생성일 순 정렬</button>
    </header>
  );
};

export default TodoHead;

const HeadBlock = css`
  text-align: center;
  padding-top: 30px;
`;

const Time = css`
  padding-bottom: 10px;
  font-size: 1rem;
`;
