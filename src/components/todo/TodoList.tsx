import React from 'react';
import { css } from '@emotion/react';
import { Itodo } from './type';
import { TodoItem } from 'components/todo';

interface ITodoListProps {
  todos: Itodo[];
  handleDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, handleDeleteTodo }) => {
  return (
    <ul css={ListContainer}>
      {todos.map((todo) => (
        <TodoItem item={todo} handleDeleteTodo={handleDeleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;

const ListContainer = css`
  padding: 10px 0 30px 0;
  overflow-y: auto;
`;
