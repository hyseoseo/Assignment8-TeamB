import { css } from '@emotion/react';
import { FONT_SIZE_STYLE } from './fontSize';
import { COLOR_STYLE } from './color';

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

export const MainBtn = css`
  ${ButtonDefault}
  font-size: ${FONT_SIZE_STYLE.smaller};
  background-color: ${COLOR_STYLE.greyLighter};
  padding: 0.5rem 0.8rem;
  margin-right: 5px;
  border-radius: 2px;
  color: ${COLOR_STYLE.greyDarkest};
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const MainSelectedBtn = css`
  ${MainBtn}
  background-color: ${COLOR_STYLE.primary};
  color: ${COLOR_STYLE.white};
  transition: all 0.3s;
`;
