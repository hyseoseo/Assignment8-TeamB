import React, { useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";

export type Status = "완료" | "진행중" | "시작안함";

export interface Itodo {
  id: number;
  taskName: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

const initialTodolist: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState<Itodo[]>(initialTodolist);
  let nextIdState: number = todoState.length
    ? todoState[todoState.length - 1].id + 1
    : 0;

  const incrementNextId = () => {
    nextIdState++;
  };

  const saveData = () => {
    //useStorage hook
  };

  const loadData = () => {
    //useStorage hook
  };

  const editTodo = (id: number, status: Status): void => {
    setTodoState((prevState) =>
      prevState.map((todo: Itodo) => ({
        ...todo,
        updatedAt: new Date(),
        status: status,
      }))
    );
  };

  const removeTodo = (id: number): void => {
    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id)
    );
  };

  const createTodo = (todo: Itodo): void => {
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextIdState,
        createdAt: new Date(),
      })
    );
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    editTodo,
    removeTodo,
    createTodo,
    saveData,
  };
};
