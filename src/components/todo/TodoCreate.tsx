import React from 'react';
import { css } from '@emotion/react';

const TodoCreate: React.FC = () => {
  return (
    <article css={CreateContainer}>
      <h1>할 일을 추가하세요!</h1>
      <div>
        <input css={TodoInput} placeholder="할 일을 적어주세요" />
        <button css={AddButton}>추가</button>
      </div>
    </article>
  );
};

export default TodoCreate;

const CreateContainer = css`
  width: 100%;
  background-color: rgba(74, 215, 144, 0.5);
  padding: 20px 40px;
  & h1 {
    padding-bottom: 15px;
    font-size: 1.1rem;
  }
`;

const TodoInput = css`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 85%;
  outline: none;
  font-size: 1.5rem;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 1.1rem;
  }
`;

const AddButton = css`
  margin-left: 5px;
  width: 10%;
  padding: 14px 0;
`;
