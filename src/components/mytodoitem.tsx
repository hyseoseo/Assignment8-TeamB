import React, { useState, useRef, useEffect } from "react";
import { Itodo, Status } from "./useTodo";

interface ITodoItemProps {
  editTodo: (id: number, status: Status) => void;
  removeTodo: (id: number) => void;
  saveData: () => void;
  todo: Itodo;
}

const TodoItem = ({ editTodo, removeTodo, saveData, todo }: ITodoItemProps) => {
  const status = todo?.status;

  const options = ["시작안함", "진행중", "완료"];
  return (
    <div>
      <span>{todo?.taskName}</span>
      <select>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default TodoItem;
