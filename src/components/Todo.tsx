import React from "react";
import { css } from "@emotion/react";
import { Itodo, Status } from "components/useTodo";
import useTodo from "components/useTodo";
import TodoItem from "./mytodoitem";

const Todo: React.FC = () => {
  const {
    todos,
    nextIdState,
    incrementNextId,
    editTodo,
    removeTodo,
    createTodo,
  } = useTodo();

  const todo: Itodo = {
    id: 1,
    taskName: "task",
    status: "시작안함",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const handleClick = () => {
    createTodo(todo);
  };

  return (
    <div>
      <h1 css={Heading}>hey</h1>
      <button onClick={handleClick}>add</button>
      {console.log(todos)}
    </div>
  );
};

export default Todo;

const Heading = css`
  font-size: 100px;
  color: red;
`;
