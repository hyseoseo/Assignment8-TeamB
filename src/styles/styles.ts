import { css } from '@emotion/react';

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexColCenter = css`
  ${FlexCenter}
  flex-direction: column;
`;

export const ButtonDefault = css`
  border: 0;
  background-color: inherit;
  cursor: pointer;
`;
