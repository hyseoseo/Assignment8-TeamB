import React from "react";
import TodoCreate from "./TodoCreate";
import { css } from "@emotion/react";

const Todo: React.FC = () => {
  return (
    <div css={HeadBlock}>
      <div css={Time}>01:02 PM</div>
      <TodoCreate />
    </div>
  );
};

export default Todo;

const HeadBlock = css`
  // display: flex;
  // justify-content: center;
  text-align: center;
  padding-top: 30px;
`;

const Time = css`
  padding-bottom: 10px;
  font-size: 17px;
`;
