import { useState } from 'react';
import { BASE_MODAL_OPTION } from 'config';
import { IuseModal, ImodalContents } from './types';

const useModal = (): IuseModal => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [contents, setContents] = useState<ImodalContents>(BASE_MODAL_OPTION);

  const openModal = (contents: ImodalContents): void => {
    setIsVisible(true);
    setContents(contents);
  };

  const closeModal = (): void => {
    setIsVisible(false);
  };

  return { isVisible, openModal, closeModal, contents };
};

export default useModal;
