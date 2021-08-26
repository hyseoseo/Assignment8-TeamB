import React, { useState } from 'react';
import { IuseModal } from './types';

const useModal = (): IuseModal => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [ModalComponent, setModalComponent] = useState<React.FC | null>(null);

  const openModal = (component: React.FC): void => {
    setIsVisible(true);
    setModalComponent(component);
  };

  const closeModal = (): void => {
    setIsVisible(false);
    setModalComponent(null);
  };

  return { isVisible, openModal, closeModal, ModalComponent };
};

export default useModal;
