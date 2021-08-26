import React from 'react';
import { css } from '@emotion/react';
import { useModalContext } from 'contexts';
import { useInput } from 'hooks';
import { ErrorModal } from 'components/modals';

interface ITodoCreateProps {
  createTodo: (value: string) => void;
}

const TodoCreate: React.FC<ITodoCreateProps> = ({ createTodo }) => {
  const { value, clearValue, handleChange } = useInput('');
  const { openModal } = useModalContext()!;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (value === '') {
      openModal(ErrorModal);
      return;
    }

    createTodo(value);
    clearValue();
  };

  return (
    <form css={CreateContainer} onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        css={TodoInput}
        placeholder="할 일을 적어주세요"
      />
      <button css={AddButton}>추가</button>
    </form>
  );
};

export default TodoCreate;

const CreateContainer = css`
  width: 100%;
  background-color: rgba(74, 215, 144, 0.5);
  padding: 20px 40px;
`;

const TodoInput = css`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 85%;
  outline: none;
  font-size: 1.5rem;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 1.1rem;
  }
`;

const AddButton = css`
  margin-left: 5px;
  width: 10%;
  padding: 14px 0;
`;
