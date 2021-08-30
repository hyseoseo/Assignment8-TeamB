import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { COLOR_STYLE } from './color';
import { FlexCenter } from './styles';

export const GlobalStyles = css`
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  body {
    background-color: ${COLOR_STYLE.grey};
    font-size: 62.5%; // 1rem = 10px
    font-family: sans-serif;
  }

  #root {
    height: 100vh;
    ${FlexCenter}
  }
`;
