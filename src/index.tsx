import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'style/GlobalStyles';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
