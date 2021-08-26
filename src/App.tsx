import React from 'react';
import { ModalProvider } from 'contexts/ModalContext';
import TodoContainer from 'components/todo/TodoContainer';

const App: React.FC = () => {
  return (
    <ModalProvider>
      <TodoContainer />
    </ModalProvider>
  );
};

export default App;
