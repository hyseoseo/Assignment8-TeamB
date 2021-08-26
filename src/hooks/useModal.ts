import { useState } from 'react';
import { IuseModal } from './types';

const useModal = (): IuseModal => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return { isVisible, openModal, closeModal };
};

export default useModal;
