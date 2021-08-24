import React from 'react';
import { css } from '@emotion/react';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  return (
    <main css={ListContainer}>
      <TodoItem />
    </main>
  );
};

export default TodoList;

const ListContainer = css`
  padding: 10px 0 30px 0;
  overflow-y: auto;
`;
