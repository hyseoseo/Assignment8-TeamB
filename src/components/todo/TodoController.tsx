import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { ButtonDefault, COLOR_STYLE, FONT_SIZE_STYLE } from 'styles';
import { OPTIONS, Itodo, Status } from './type';

interface Iprop {
  todo: Itodo;
  changeTodoStatus: (id: number, status: Status) => void;
  changeTodoImportance: (id: number) => void;
}

const TodoController: React.FC<Iprop> = ({ todo, changeTodoStatus, changeTodoImportance }) => {
  const [status, setStatus] = useState<Status>(todo.status);

  const handleClick = (status: Status): void => {
    setStatus(status);
    changeTodoStatus(todo.id, status);
  };

  return (
    <div css={Container}>
      <button
        css={todo.isImportant ? SelectedButton : Button}
        onClick={() => changeTodoImportance(todo.id)}
      >
        <span css={status === 'Done' && Done}>Bookmark</span>
      </button>
      {OPTIONS.map((option, index) => (
        <button
          type="button"
          key={index}
          css={option === status ? SelectedButton : Button}
          onClick={() => handleClick(option)}
        >
          <span css={status === 'Done' && Done}>{option}</span>
        </button>
      ))}
    </div>
  );
};

export default TodoController;

const Container = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.5rem;
`;

const Button = css`
  ${ButtonDefault}
  font-size: ${FONT_SIZE_STYLE.smaller};
  background-color: ${COLOR_STYLE.greyLighter};
  padding: 0.5rem 0.8rem;
  margin-right: 5px;
  border-radius: 2px;
  color: ${COLOR_STYLE.greyDarkest};
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SelectedButton = css`
  ${Button}
  background-color: ${COLOR_STYLE.primary};
  color: ${COLOR_STYLE.white};
  transition: all 0.3s;
`;

const Done = css`
  color: ${COLOR_STYLE.greyDarker};
  text-decoration: line-through;
`;
