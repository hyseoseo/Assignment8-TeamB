import React, { useState } from 'react';
import { css } from '@emotion/react';
import { COLOR_STYLE, FONT_SIZE_STYLE, MainBtn, MainSelectedBtn } from 'styles';
import { OPTIONS, Itodo, Status } from './type';

interface Iprop {
  todo: Itodo;
  time: string;
  changeTodoStatus: (id: number, status: Status) => void;
  toggleBookmark: (id: number) => void;
}

const TodoStatus: React.FC<Iprop> = ({ todo, time, changeTodoStatus, toggleBookmark }) => {
  const [status, setStatus] = useState<Status>(todo.status);

  const handleClickStatus = (status: Status): void => {
    setStatus(status);
    changeTodoStatus(todo.id, status);
  };

  return (
    <div css={Container}>
      <div css={ControlBox}>
        <button
          css={todo.isBookmarked ? MainSelectedBtn : MainBtn}
          onClick={() => toggleBookmark(todo.id)}
        >
          <span css={status === Status.done && Done}>Bookmark</span>
        </button>
        {OPTIONS.map((option, index) => (
          <button
            type="button"
            key={index}
            css={option === status ? MainSelectedBtn : MainBtn}
            onClick={() => handleClickStatus(option)}
          >
            <span css={status === Status.done && Done}>{option}</span>
          </button>
        ))}
      </div>
      <small css={LastUpdate}>Updated {time} ago</small>
    </div>
  );
};

export default TodoStatus;

const Container = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ControlBox = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.5rem;
`;

const Done = css`
  color: ${COLOR_STYLE.greyDarker};
  text-decoration: line-through;
`;

const LastUpdate = css`
  color: ${COLOR_STYLE.greyDarkest};
  font-size: ${FONT_SIZE_STYLE.smaller};
  transform: translateY(-3px);
`;
