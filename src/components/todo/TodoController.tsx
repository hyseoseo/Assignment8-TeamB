import React from 'react';
import { css } from '@emotion/react';
import { OPTIONS } from './type';

interface Iprop {
  todoId: number;
  handleDeleteTodo: (id: number) => void;
}

const TodoController: React.FC<Iprop> = ({ handleDeleteTodo, todoId }) => {
  return (
    <div css={TodoInfo}>
      <button css={StarRed}>★</button>
      <select>
        {OPTIONS.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button css={DeleteButton} onClick={() => handleDeleteTodo(todoId)}>
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
