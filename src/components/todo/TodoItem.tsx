import React from 'react';
import { css } from '@emotion/react';
import { OPTIONS, Itodo } from './type';

interface ITodoItemProps {
  //changeTodoStatus: (id: number, status: Status) => void;
  item: Itodo;
  handleDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({ item, handleDeleteTodo }) => {
  const handleDeleteClick = (id: number) => {
    handleDeleteTodo(id);
  };

  return (
    <li css={ItemContainer}>
      <p css={TodoContent}>{item.taskName}</p>
      <div css={TodoInfo}>
        <button css={StarRed}>★</button>
        <select>
          {OPTIONS.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        <button css={DeleteButton} onClick={() => handleDeleteClick(item.id)}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

const ItemContainer = css`
  width: 95%;
  margin: 0 auto;
  background: #eeeeee;
  padding: 10px 17px;
  border-radius: 10px;
  margin-top: 10px;
`;

const TodoContent = css`
  padding: 10px 0;
`;

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
