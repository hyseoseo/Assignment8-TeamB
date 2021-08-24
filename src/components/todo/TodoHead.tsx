import React from "react";
import TodoCreate from "./TodoCreate";
import { css } from "@emotion/react";
import { Itodo } from "components/todo/useTodo";

interface ITodoProps {
  nextId: number;
  createTodo: (value: string) => void;
  incrementNextId: () => void;
}

const Todo: React.FC<ITodoProps> = ({
  nextId,
  createTodo,
  incrementNextId,
}) => {
  return (
    <header css={HeadBlock}>
      <h1 css={Time}>01:02 PM</h1>
      <TodoCreate
        nextId={nextId}
        createTodo={createTodo}
        incrementNextId={incrementNextId}
      />
    </header>
  );
};

export default Todo;

const HeadBlock = css`
  text-align: center;
  padding-top: 30px;
`;

const Time = css`
  padding-bottom: 10px;
  font-size: 1rem;
`;
