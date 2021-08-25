import React from 'react';
import { css } from '@emotion/react';
import { Itodo } from 'config';
import { TodoItem } from 'components/todo';

interface ITodoListProps {
  todos: Itodo[];
  removeTodo: (id: number) => void;
  updateTodoId: () => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  removeTodo,
  updateTodoId,
}) => {
  return (
    <ul css={ListContainer}>
      {todos.map((todo) => (
        <TodoItem
          item={todo}
          removeTodo={removeTodo}
          updateTodoId={updateTodoId}
        />
      ))}
    </ul>
  );
};

export default TodoList;

const ListContainer = css`
  padding: 10px 0 30px 0;
  overflow-y: auto;
`;
