import React from 'react';
import { css } from '@emotion/react';
import { TodoList, TodoHead, useTodo } from 'components/todo';

const TodoContainer: React.FC = () => {
  const { todos, changeTodoStatus, createTodo, handleDeleteTodo } = useTodo();

  return (
    <div css={TodoTemplate}>
      <TodoHead createTodo={createTodo} />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        changeTodoStatus={changeTodoStatus}
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
