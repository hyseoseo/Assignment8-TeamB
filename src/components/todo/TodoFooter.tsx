import React from 'react';
import { css } from '@emotion/react';
import { Itodo, Status } from './type';

interface ITodoFooterProps {
  todos: Itodo[];
}

const TodoFooter: React.FC<ITodoFooterProps> = ({ todos }) => {
  const undoneTodos: Itodo[] = todos.filter((todo) => todo.status !== Status.completed);

  return (
    <footer css={FooterBlock}>
      <h2>{undoneTodos.length} todos left</h2>
    </footer>
  );
};

export default TodoFooter;

const FooterBlock = css`
  text-align: center;
  padding-top: 30px;
  font-size: 1rem;
`;
