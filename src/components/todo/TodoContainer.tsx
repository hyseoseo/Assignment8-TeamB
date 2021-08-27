import React from 'react';
import { css } from '@emotion/react';
import { COLOR_STYLE } from 'styles';
import { Status } from './type';
import { TodoList, TodoHead, TodoBoundary, useTodo } from 'components/todo';
import useFilter from 'hooks/useFilter';
import Filter from './Filter';

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

  const undoneTodos: number = todos.filter((todo) => todo.status !== Status.done).length;
  const { filteredItem, filterOption, filterClicked, handleCheck, setFilteredResult } =
    useFilter(todos);

  return (
    <div css={Container}>
      <TodoHead createTodo={createTodo} sortTodo={sortTodo} />
      <TodoBoundary undoneTasks={undoneTodos} />
      <Filter handleCheck={handleCheck} setFilteredResult={setFilteredResult} />
      <TodoList
        todos={todos}
        filteredItem={filteredItem}
        filterOption={filterOption}
        filterClicked={filterClicked}
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

  /* &::before {
    content: '';
    width: 70rem;
    height: 70rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    background-color: ${COLOR_STYLE.primaryLighter};
    border-radius: 100%;
    transform: translate(-50%, -50%);
  }

  &::after {
    content: '';
    width: 25rem;
    height: 25rem;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -10;
    background-color: ${COLOR_STYLE.primaryLighter};
    border-radius: 100%;
    transform: translateX(-15%);
  } */
`;
