import React from 'react';
import { STORAGE_KEYS } from 'config';
import { Status, Itodo } from './type';
import useLocalStorage from 'hooks/useLocalStorage';

const initialTodolist: Itodo[] = [];

const useTodo = () => {
  const [todos, setTodos] = useLocalStorage(
    STORAGE_KEYS.todos,
    initialTodolist,
  );

  const changeTodoStatus = (id: number, status: Status): void => {
    setTodos((prev) =>
      prev.map((todo: Itodo) => ({
        ...todo,
        updatedAt: new Date(),
        status: status,
      })),
    );
  };

  const removeTodo = (id: number): void => {
    setTodos((prev: Itodo[]) => prev.filter((todo: Itodo) => todo.id !== id));
  };

  const updateTodoId = (): void => {
    setTodos((prev: Itodo[]) =>
      prev.map((todo: Itodo, index) => ({ ...todo, id: index })),
    );
  };

  const handleDeleteTodo = (id: number): void => {
    removeTodo(id);
    updateTodoId();
  };

  const createTodo = (value: string): void => {
    setTodos((prev) =>
      prev.concat({
        taskName: value,
        status: Status.notStarted,
        id: todos.length,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    );
  };

  return {
    todos,
    changeTodoStatus,
    createTodo,
    handleDeleteTodo,
  };
};

export default useTodo;