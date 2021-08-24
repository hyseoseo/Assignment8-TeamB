import React from "react";
import useLocalStorage from "hooks/useLocalStorage";
import { STORAGE_KEYS } from "config";

export type Status = "완료" | "진행중" | "시작안함";

export interface Itodo {
  id: number;
  taskName: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

const initialTodolist: Itodo[] = [];

const useTodo = () => {
  const [todos, setTodos] = useLocalStorage(
    STORAGE_KEYS.todos,
    initialTodolist
  );

  const changeTodoStatus = (id: number, status: Status): void => {
    setTodos((prev) =>
      prev.map((todo: Itodo) => ({
        ...todo,
        updatedAt: new Date(),
        status: status,
      }))
    );
  };

  const removeTodo = (id: number): void => {
    const remains = todos.filter((todo: Itodo) => todo.id !== id);
    remains.map((item, index) => (item.id = index));
    setTodos(remains);
  };

  const createTodo = (value: string): void => {
    setTodos((prev) =>
      prev.concat({
        taskName: value,
        status: "시작안함",
        id: todos.length,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    );
  };

  return {
    todos,
    changeTodoStatus,
    removeTodo,
    createTodo,
  };
};

export default useTodo;
