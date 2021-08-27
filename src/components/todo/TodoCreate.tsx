import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { FaPlus } from 'react-icons/fa';
import { ButtonDefault, COLOR_STYLE, FONT_SIZE_STYLE } from 'styles';
import { useModalContext } from 'contexts';
import { useInput } from 'hooks';
import { ErrorModal } from 'components/modals';

interface ITodoCreateProps {
  createTodo: (value: string) => void;
}

const TodoCreate: React.FC<ITodoCreateProps> = ({ createTodo }) => {
  const [isError, setIsError] = useState(false);
  const { value, clearValue, handleChange } = useInput('');
  const { openModal } = useModalContext()!;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (value === '') {
      openModal(ErrorModal);
      setIsError(true);
      return;
    }

    createTodo(value);
    clearValue();
  };

  useEffect(() => {
    setIsError(false);
  }, [value]);

  return (
    <form css={Form} onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        css={isError ? InputError : Input}
        placeholder="Enter What to do..."
      />
      <button css={AddBtn}>
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoCreate;

const Form = css`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 1rem;
`;

const Input = css`
  width: 100%;
  font-size: ${FONT_SIZE_STYLE.medium};
  padding: 0.9rem 1.6rem;
  border: 1px solid ${COLOR_STYLE.grey};
  border-radius: 3rem;
  outline: none;
  color: ${COLOR_STYLE.greyDarkest};

  &::placeholder {
    font-size: ${FONT_SIZE_STYLE.medium};
  }
`;

const InputError = css`
  ${Input}
  border-color: ${COLOR_STYLE.red};
`;

const AddBtn = css`
  ${ButtonDefault}
  position: absolute;
  right: 0;
  transform: translateX(-50%);

  svg {
    font-size: ${FONT_SIZE_STYLE.large};
    color: ${COLOR_STYLE.primaryLighter};
    transition: all 0.2s;
  }

  &:hover svg {
    opacity: 0.7;
  }
`;
