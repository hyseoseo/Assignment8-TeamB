import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { Status } from './type';
import { TodoList, TodoHead, useTodo } from 'components/todo';
import useFilter from 'hooks/useFilter';
import Filter from './Filter';
import { ChangeEvent } from 'hooks/types';

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
  const { filteredItem, filterOption, filterClicked, handleCheck, setFilteredResult } =
    useFilter(todos);

  const statusList = [Status.notStarted, Status.onGoing, Status.completed];

  const initialFilter: Object = {
    [Status.notStarted]: false,
    [Status.onGoing]: false,
    [Status.completed]: false,
  };
  const [checkedStatus, setCheckedStatus] = useState<Object>(initialFilter);
  const [onlyImportant, setOnlyImportant] = useState<boolean>(false);

  const handleStatusCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const status = e.target.name;
    const isChecked = e.target.checked;
    setCheckedStatus((prev) => ({ ...prev, [status]: isChecked }));
  };

  const handleImportanceCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOnlyImportant(e.target.checked);
  };

  useEffect(() => {
    let array = [];
    for (const [key, value] of Object.entries(checkedStatus)) {
      array.push([key, value]);
    }
    const checkedStatusToArray = array.flatMap((e) => (e[1] === true ? [e[0]] : []));
    setTodos((prev) =>
      prev.map((todo) => {
        if (checkedStatusToArray.length === 0) {
          return { ...todo, visible: true };
        } else if (
          checkedStatusToArray.length &&
          checkedStatusToArray.indexOf(todo.status) === -1
        ) {
          return { ...todo, visible: false };
        } else {
          return { ...todo, visible: true };
        }
      }),
    );
  }, [checkedStatus]);

  return (
    <div css={TodoTemplate}>
      <TodoHead createTodo={createTodo} sortTodo={sortTodo} />
      <fieldset>
        {statusList.map((status) => (
          <label>
            {status}
            <input type="checkbox" name={status} onChange={handleStatusCheckbox} />
          </label>
        ))}
      </fieldset>
      <fieldset>
        <label>중요 여부</label>
        <input type="checkbox" onChange={handleImportanceCheckbox}></input>
      </fieldset>
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
