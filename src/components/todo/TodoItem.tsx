import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Itodo, Status } from './type';
import { TodoController } from '.';
import { SetState } from 'hooks/types';

interface Iprop {
  todo: Itodo;
  index: number;
  handleDragStart: (pointer: number) => void;
  handleDragEnter: (pointer: number) => void;
  handleDragOver: (e: React.DragEvent, setIsDragOver: SetState<boolean>) => void;
  handleDragEnd: (setIsDragOver: SetState<boolean>) => void;
  handleDeleteTodo: (id: number) => void;
  changeTodoStatus: (id: number, status: Status | string) => void;
  changeTodoImportance: (id: number) => void;
}

const TodoItem: React.FC<Iprop> = ({ ...props }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const {
    todo,
    index,
    handleDragStart,
    handleDragEnter,
    handleDragOver,
    handleDragEnd,
    handleDeleteTodo,
    changeTodoStatus,
    changeTodoImportance,
  } = props;

  return (
    <li
      css={isDragOver ? ListHover : List}
      draggable
      onDragStart={() => handleDragStart(index)}
      onDragEnter={() => handleDragEnter(index)}
      onDragOver={(e) => handleDragOver(e, setIsDragOver)}
      onDragEnd={() => handleDragEnd(setIsDragOver)}
    >
      <p css={Content}>{todo.taskName}</p>
      <TodoController
        todo={todo}
        handleDeleteTodo={handleDeleteTodo}
        changeTodoStatus={changeTodoStatus}
        changeTodoImportance={changeTodoImportance}
      />
    </li>
  );
};

export default TodoItem;

const List = css`
  width: 95%;
  margin: 0 auto;
  background: #eeeeee;
  padding: 10px 17px;
  border-radius: 10px;
  margin-top: 10px;
  cursor: move;
`;

const ListHover = css`
  ${List}
  background-color: #666;
`;

const Content = css`
  padding: 10px 0;
`;
