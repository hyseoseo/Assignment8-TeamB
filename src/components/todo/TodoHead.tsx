import React from 'react';
import { css } from '@emotion/react';
import { useModal } from 'hooks';
import { getCurrentDate } from 'utils/getCurrentDate';
import { Modal } from 'components';
import { FilterModal } from 'components/modals';
import { TodoCreate } from 'components/todo';

interface ITodoHeadProps {
  createTodo: (value: string) => void;
  sortTodo: () => void;
}

const TodoHead: React.FC<ITodoHeadProps> = ({ createTodo, sortTodo }) => {
  const { isVisible, openModal, closeModal } = useModal();

  const handleClickFilter = (): void => {
    openModal();
  };

  return (
    <header css={HeadBlock}>
      <h1 css={Time}>{getCurrentDate()}</h1>
      <button onClick={handleClickFilter}>
        <span>filter modal</span>
      </button>
      <Modal ModalComponent={FilterModal} isVisible={isVisible} closeModal={closeModal} />
      <TodoCreate createTodo={createTodo} />
      <button onClick={sortTodo}>생성일 순 정렬</button>
    </header>
  );
};

export default TodoHead;

const HeadBlock = css`
  text-align: center;
  padding-top: 30px;
`;

const Time = css`
  padding-bottom: 10px;
  font-size: 1rem;
`;
