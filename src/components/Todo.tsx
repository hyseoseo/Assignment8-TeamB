import React from 'react';
import { css } from '@emotion/react';

const Todo: React.FC = () => {
  return (
    <div>
      <h1 css={Heading}>hey</h1>
    </div>
  );
};

export default Todo;

const Heading = css`
  font-size: 100px;
  color: red;
`;
