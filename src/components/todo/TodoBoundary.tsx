import React from 'react';
import { css } from '@emotion/react';
import { COLOR_STYLE, FlexCenter, FONT_SIZE_STYLE } from 'styles';
import { Status, Itodo } from './type';

interface Iprop {
  todos: Itodo[];
}

const TodoBoundary: React.FC<Iprop> = ({ todos }) => {
  const undoneTasks: number = todos.filter((todo) => todo.status !== Status.done).length;

  return (
    <div css={Wrapper}>
      <span css={TextContainer}>
        <p css={Text}>{undoneTasks} tasks left</p>
      </span>
    </div>
  );
};

export default TodoBoundary;

const Wrapper = css`
  position: relative;
  z-index: 10;
`;

const TextContainer = css`
  ${FlexCenter}
  height: 2rem;
  width: 10rem;
  margin: 1.2rem auto;
  margin-bottom: 0.9rem;
  border: 1px solid ${COLOR_STYLE.greyDarker};
  border-radius: 3rem;
  background-color: ${COLOR_STYLE.white};

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 0;
    background-color: ${COLOR_STYLE.greyDarker};
  }
`;

const Text = css`
  font-size: ${FONT_SIZE_STYLE.small};
  font-weight: 600;
  color: ${COLOR_STYLE.primary};
`;
