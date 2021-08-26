import React from 'react';
import ReactDOM from 'react-dom';
import { css } from '@emotion/react';
import { useModalContext } from 'contexts/ModalContext';

const Modal: React.FC = () => {
  const { isVisible, closeModal, ModalComponent } = useModalContext()!;

  return isVisible
    ? ReactDOM.createPortal(
        <>
          <div css={Overlay} onClick={closeModal}></div>
          <div css={ModalWrapper}>
            {ModalComponent}
            <button type="button" css={CloseBtn} onClick={closeModal}>
              <span>X</span>
            </button>
          </div>
        </>,
        document.getElementById('portal') as HTMLDivElement,
      )
    : null;
};

export default Modal;

const Overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #000;
  opacity: 0.5;
`;

const ModalWrapper = css`
  width: 500px;
  height: 300px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

// stlyes 로 이동
const ButtonDefault = css`
  cursor: pointer;
  border: 0;
  background-color: inherit;
`;

const CloseBtn = css`
  ${ButtonDefault}
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 25%);

  span {
    font-size: 2rem;
    color: red;
  }
`;
