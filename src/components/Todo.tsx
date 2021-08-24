import React from "react";
import { css } from "@emotion/react";
import { useTodo, Itodo, Status } from "components/useTodo";
import TodoItem from "./TodoItem";

const Todo: React.FC = () => {
  const {
    todoState,
    nextIdState,
    incrementNextId,
    editTodo,
    removeTodo,
    createTodo,
    saveData,
  } = useTodo();

  return (
    <div>
      <h1 css={Heading}>hey</h1>
      <TodoItem
        editTodo={editTodo}
        removeTodo={removeTodo}
        saveData={saveData}
        todo={todoState[0]}
      />
    </div>
  );
};

export default Todo;

const Heading = css`
  font-size: 100px;
  color: red;
`;
