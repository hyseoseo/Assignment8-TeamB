import React from 'react';
import { css } from '@emotion/react';
import { useDnD } from 'hooks';
import { Itodo } from './type';
import { TodoItem } from '.';

interface ITodoListProps {
  todos: Itodo[];
  setTodos: React.Dispatch<React.SetStateAction<Itodo[]>>;
  handleDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, setTodos, handleDeleteTodo }) => {
  const { handleDragStart, handleDragEnter, handleDragOver, handleDragEnd } = useDnD(
    todos,
    setTodos,
  );

  return (
    <ul css={Container}>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
          handleDragStart={handleDragStart}
          handleDragEnter={handleDragEnter}
          handleDragOver={handleDragOver}
          handleDragEnd={handleDragEnd}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;

const Container = css`
  padding: 10px 0 30px 0;
  overflow-y: auto;
`;
