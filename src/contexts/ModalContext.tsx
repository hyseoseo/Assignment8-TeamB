import React, { useContext } from 'react';
import { useModal } from 'hooks';
import { IuseModal } from 'hooks/types';
import { Modal } from 'components';

const ModalContext = React.createContext<IuseModal | null>(null);

export const ModalProvider: React.FC = ({ children }) => {
  const { isVisible, openModal, closeModal, contents } = useModal();

  return (
    <ModalContext.Provider value={{ isVisible, openModal, closeModal, contents }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
