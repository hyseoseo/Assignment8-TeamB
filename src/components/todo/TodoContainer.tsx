import React from 'react';
import { css } from '@emotion/react';
import { Itodo, Status } from './type';
import { TodoList, TodoHead, useTodo } from 'components/todo';
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

  const undoneTodos: Itodo[] = todos.filter((todo) => todo.status !== Status.completed);
  const { filteredItem, filterOption, filterClicked, handleCheck, setFilteredResult } =
    useFilter(todos);

  return (
    <div css={TodoTemplate}>
      <TodoHead createTodo={createTodo} sortTodo={sortTodo} />
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
