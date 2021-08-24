import React, { useState } from "react";
import { Itodo } from "./useTodo";

interface ITodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId,
}: ITodoCreateProps) => {
  const [value, setValue] = useState("");
};
