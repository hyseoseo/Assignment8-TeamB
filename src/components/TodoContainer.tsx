import React from "react";
import TodoList from "./todo/TodoList";
import TodoHead from "./todo/TodoHead";
import useTodo from "./todo/useTodo";
import { css } from "@emotion/react";

const TodoContainer: React.FC = () => {
  const {
    todos,
    nextIdState,
    incrementNextId,
    editTodo,
    removeTodo,
    createTodo,
  } = useTodo();

  return (
    <div css={TodoTemplate}>
      <TodoHead
        nextId={nextIdState}
        createTodo={createTodo}
        incrementNextId={incrementNextId}
      />
      <TodoList todos={todos} removeTodo={removeTodo} />
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
