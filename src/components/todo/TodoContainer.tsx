import React from 'react';
import { css } from '@emotion/react';
import { Status } from './type';
import { TodoList, TodoHead, TodoBoundary, useTodo } from 'components/todo';

const TodoContainer: React.FC = () => {
  const {
    todos,
    setTodos,
    changeTodoStatus,
    createTodo,
    handleDeleteTodo,
    changeTodoImportance,
    sortTodo,
    filterList,
  } = useTodo();

  const undoneTodos: number = todos.filter((todo) => todo.status !== Status.done).length;

  return (
    <div css={Container}>
      <TodoHead createTodo={createTodo} sortTodo={sortTodo} filterList={filterList} />
      <TodoBoundary undoneTasks={undoneTodos} />
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

const Container = css`
  width: 50%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
