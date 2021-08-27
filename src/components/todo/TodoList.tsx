import React from 'react';
import { css } from '@emotion/react';
import { useDnD } from 'hooks';
import { Itodo, Status } from './type';
import { TodoItem } from 'components/todo';
import { IfilterOption } from 'hooks/types';

interface ITodoListProps {
  todos: Itodo[];
  filteredItem: Itodo[];
  filterOption: IfilterOption;
  filterClicked: boolean;
  setTodos: React.Dispatch<React.SetStateAction<Itodo[]>>;
  handleDeleteTodo: (id: number) => void;
  changeTodoStatus: (id: number, status: Status) => void;
  changeTodoImportance: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  filteredItem,
  filterOption,
  filterClicked,
  setTodos,
  handleDeleteTodo,
  changeTodoStatus,
  changeTodoImportance,
}) => {
  const { handleDragStart, handleDragEnter, handleDragOver, handleDragEnd } = useDnD(
    todos,
    setTodos,
  );

  if (
    filterClicked &&
    (filterOption.status.length !== 0 || filterOption.isImportant.length !== 0)
  ) {
    return (
      <ul css={Container}>
        {filteredItem.map((todo, index) => (
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
            changeTodoImportance={changeTodoImportance}
          />
        ))}
      </ul>
    );
  }

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
          changeTodoStatus={changeTodoStatus}
          changeTodoImportance={changeTodoImportance}
        />
      ))}
    </ul>
  );
};

export default TodoList;

const Container = css`
  overflow-y: scroll;
`;
