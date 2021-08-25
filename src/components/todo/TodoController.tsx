import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { useInput } from 'hooks';
import { OPTIONS, Itodo, Status } from './type';

interface Iprop {
  todo: Itodo;
  handleDeleteTodo: (id: number) => void;
  changeTodoStatus: (id: number, status: Status | string) => void;
}

const TodoController: React.FC<Iprop> = ({ handleDeleteTodo, todo, changeTodoStatus }) => {
  const { value, handleChange } = useInput(todo.status);

  useEffect(() => {
    changeTodoStatus(todo.id, value);
  }, [value]);

  return (
    <div css={TodoInfo}>
      <button css={StarRed}>★</button>
      <select value={todo.status} onChange={handleChange}>
        {OPTIONS.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button css={DeleteButton} onClick={() => handleDeleteTodo(todo.id)}>
        삭제
      </button>
    </div>
  );
};

export default TodoController;

const StarWhite = css`
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  background: inherit;
  border: none;
  box-shadow: none;
  overflow: visible;
  line-height: 30px;
  padding-right: 10px;
`;

const StarRed = css`
  ${StarWhite}
  color: #ff3333;
`;

const TodoInfo = css`
  display: flex;
  justify-content: flex-end;
  height: 30px;
`;

const TodoStatus = css`
  padding-top: 4px;
  & select {
    padding: 2px;
    margin-left: 10px;
  }
`;

const DeleteButton = css`
  margin-left: 10px;
  cursor: pointer;
`;
