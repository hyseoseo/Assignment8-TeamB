import React from "react";
import { css } from "@emotion/react";

const TodoCreate: React.FC = () => {
  return (
    <div css={CreateContainer}>
      <h1>할 일을 추가하세요!</h1>
      <div>
        <input css={TodoInput} placeholder="할 일을 적어주세요" />
        <button css={AddButton}>추가</button>
      </div>
    </div>
  );
};

export default TodoCreate;

const CreateContainer = css`
  width: 100%;
  background-color: rgba(74, 215, 144, 0.5);
  padding: 20px 40px;
  // border-top: 3px solid #33bb77;
  // border-bottom: 3px solid #33bb77;
  & h1 {
    padding-bottom: 10px;
    font-size: 17px;
  }
`;

const TodoInput = css`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 85%;
  outline: none;
  font-size: 20px;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 17px;
  }
`;

const AddButton = css`
  margin-left: 5px;
  width: 10%;
  padding: 14px 0;
`;
