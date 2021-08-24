import React from "react";
import { css } from "@emotion/react";
import TodoItem from "./TodoItem";
import { Itodo } from "components/todo/useTodo";

interface ITodoListProps {
  todos: Itodo[];
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul css={ListContainer}>
      {todos.map((todo) => (
        <TodoItem item={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;

const ListContainer = css`
  padding: 10px 0 30px 0;
  overflow-y: auto;
`;
