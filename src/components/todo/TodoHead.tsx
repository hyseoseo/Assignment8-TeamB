import React from 'react';
import TodoCreate from './TodoCreate';
import { css } from '@emotion/react';

const Todo: React.FC = () => {
  return (
    <header css={HeadBlock}>
      <h1 css={Time}>01:02 PM</h1>
      <TodoCreate />
    </header>
  );
};

export default Todo;

const HeadBlock = css`
  text-align: center;
  padding-top: 30px;
`;

const Time = css`
  padding-bottom: 10px;
  font-size: 1rem;
`;
