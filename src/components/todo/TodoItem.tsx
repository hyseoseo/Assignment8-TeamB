import React from 'react';
import { css } from '@emotion/react';
import { useState } from 'react';

const TodoItem: React.FC = () => {
  return (
    <article css={ItemContainer}>
      <div css={TodoContent}>할 일</div>
      <div css={TodoInfo}>
        <div css={StarRed}>★</div>
        <div css={TodoStatus}>
          <select>
            <option>시작 안함</option>
            <option>진행중</option>
            <option>완료</option>
          </select>
        </div>
        <div css={TodoStatus}>
          <button css={DeleteButton}>삭제</button>
        </div>
      </div>
    </article>
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
`;

const StarRed = css`
  ${StarWhite}
  color: #ff3333;
`;

const TodoInfo = css`
  display: flex;
  justify-content: flex-end;
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
