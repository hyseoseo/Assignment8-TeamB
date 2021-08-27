import React, { useState } from 'react';
import { css } from '@emotion/react';
import { COLOR_STYLE, MainBtn, MainSelectedBtn } from 'styles';
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
        css={todo.isImportant ? MainSelectedBtn : MainBtn}
        onClick={() => changeTodoImportance(todo.id)}
      >
        <span css={status === Status.done && Done}>Bookmark</span>
      </button>
      {OPTIONS.map((option, index) => (
        <button
          type="button"
          key={index}
          css={option === status ? MainSelectedBtn : MainBtn}
          onClick={() => handleClick(option)}
        >
          <span css={status === Status.done && Done}>{option}</span>
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

const Done = css`
  color: ${COLOR_STYLE.greyDarker};
  text-decoration: line-through;
`;
