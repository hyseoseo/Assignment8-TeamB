import React from "react";
import TodoList from "./todo/TodoList";
import TodoHead from "./todo/TodoHead";
import { css } from "@emotion/react";

const TodoContainer: React.FC = () => {
  return (
    <div css={TodoTemplate}>
      <TodoHead></TodoHead>
      <TodoList></TodoList>
    </div>
  );
};

export default TodoContainer;

const TodoTemplate = css`
  width: 70%;
  height: 800px;

  min-width: 360px;
  max-width: 700px;

  background: white;
  border-radius: 30px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);

  margin: 0 auto;

  margin-top: 40px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
`;
