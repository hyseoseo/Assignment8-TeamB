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
  let nextIdState: number = todos.length ? todos[todos.length - 1].id + 1 : 0;

  const incrementNextId = (): void => {
    nextIdState++;
  };

  const editTodo = (id: number, status: Status): void => {
    const prev: Itodo[] = [...todos];
    setTodos(
      prev.map((todo: Itodo) => ({
        ...todo,
        updatedAt: new Date(),
        status: status,
      }))
    );
  };

  const removeTodo = (id: number): void => {
    const prev: Itodo[] = [...todos];
    setTodos(prev.filter((todo: Itodo) => todo.id !== id));
  };

  const createTodo = (todo: Itodo): void => {
    const prev: Itodo[] = [...todos];
    setTodos(
      prev.concat({
        ...todo,
        id: nextIdState,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    );
  };

  return {
    todos,
    nextIdState,
    incrementNextId,
    editTodo,
    removeTodo,
    createTodo,
  };
};

export default useTodo;
