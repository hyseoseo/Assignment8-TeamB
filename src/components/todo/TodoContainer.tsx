import React from 'react';
import { css } from '@emotion/react';
import { Itodo, Status } from './type';
import { TodoList, TodoHead, useTodo } from 'components/todo';

const TodoContainer: React.FC = () => {
  const {
    todos,
    setTodos,
    changeTodoStatus,
    createTodo,
    handleDeleteTodo,
    changeTodoImportance,
    sortTodo,
  } = useTodo();

  const undoneTodos: Itodo[] = todos.filter((todo) => todo.status !== Status.completed);

  return (
    <div css={TodoTemplate}>
      <TodoHead createTodo={createTodo} sortTodo={sortTodo} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        handleDeleteTodo={handleDeleteTodo}
        changeTodoStatus={changeTodoStatus}
        changeTodoImportance={changeTodoImportance}
      />
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
