import React from 'react';
import { css } from '@emotion/react';
import { getCurrentDate } from 'utils/getCurrentDate';
import { TodoCreate } from 'components/todo';

interface ITodoHeadProps {
  createTodo: (value: string) => void;
}

const TodoHead: React.FC<ITodoHeadProps> = ({ createTodo }) => {
  return (
    <header css={HeadBlock}>
      <h1 css={Time}>{getCurrentDate()}</h1>
      <TodoCreate createTodo={createTodo} />
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