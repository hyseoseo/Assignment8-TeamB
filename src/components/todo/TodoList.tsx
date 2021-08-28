import React from 'react';
import { css } from '@emotion/react';
import { useDnD } from 'hooks';
import { Itodo, Status } from './type';
import { TodoItem } from 'components/todo';

interface IProps {
  todos: Itodo[];
  setTodos: React.Dispatch<React.SetStateAction<Itodo[]>>;
  handleDeleteTodo: (id: number) => void;
  changeTodoStatus: (id: number, status: Status) => void;
  toggleBookmark: (id: number) => void;
}

const TodoList: React.FC<IProps> = ({ ...props }) => {
  const { todos, setTodos, handleDeleteTodo, changeTodoStatus, toggleBookmark } = props;
  const { handleDragStart, handleDragEnter, handleDragOver, handleDragEnd } = useDnD(
    todos,
    setTodos,
  );

  return (
    <ul css={Container}>
      {todos.map(
        (todo, index) =>
          todo.isVisible && (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              handleDragStart={handleDragStart}
              handleDragEnter={handleDragEnter}
              handleDragOver={handleDragOver}
              handleDragEnd={handleDragEnd}
              handleDeleteTodo={handleDeleteTodo}
              changeTodoStatus={changeTodoStatus}
              toggleBookmark={toggleBookmark}
            />
          ),
      )}
    </ul>
  );
};

export default TodoList;

const Container = css`
  overflow-y: scroll;
`;
