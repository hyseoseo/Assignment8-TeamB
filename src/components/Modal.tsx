import React from 'react';
import ReactDOM from 'react-dom';
import { css } from '@emotion/react';
import { AiOutlineWarning } from 'react-icons/ai';
import { BOX_STYLE, COLOR_STYLE, FONT_SIZE_STYLE, ButtonDefault, Overlay } from 'styles';
import { useModalContext } from 'contexts/ModalContext';
import { ButtonType } from 'hooks/types';

const Modal: React.FC = () => {
  const { isVisible, closeModal, contents } = useModalContext()!;
  const { title, content, buttonType, onOk, task, taskInfo } = contents!;
  const BtnStyle = getButtonStyle(buttonType);

  const handleClick = (): void => {
    closeModal();

    if (onOk) {
      onOk();
    }
  };

  return isVisible
    ? ReactDOM.createPortal(
        <>
          <div css={Overlay} onClick={closeModal}></div>
          <div css={ModalWrapper}>
            <span css={Icon}>
              <AiOutlineWarning />
            </span>
            <div css={ContentsContainer}>
              <h1 css={Heading}>{title}</h1>
              {task ? (
                <p css={ParagraphDelete}>
                  "<span css={Task}>{task}</span>"<small css={TaskInfo}>{taskInfo}.</small>
                </p>
              ) : (
                <p css={Paragraph}>{content}</p>
              )}
              <button css={BtnStyle} onClick={handleClick}>
                <span>{buttonType.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </>,
        document.getElementById('portal') as HTMLDivElement,
      )
    : null;
};

export default Modal;

const getButtonStyle = (btnType: ButtonType) => {
  switch (btnType) {
    case ButtonType.ok:
      return BtnOk;
    case ButtonType.delete:
      return BtnDelete;
    default:
      return Btn;
  }
};

const ModalWrapper = css`
  display: flex;
  align-items: flex-start;
  width: 26rem;
  background-color: ${COLOR_STYLE.white};
  padding: 3rem 2.5rem 4.5rem 2.5rem;
  border-radius: 2px;
  box-shadow: ${BOX_STYLE.shadowDarker};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const ContentsContainer = css`
  text-align: start;
`;

const Heading = css`
  font-size: ${FONT_SIZE_STYLE.medium};
  font-weight: 600;
  margin-bottom: 1.2rem;
`;

const Paragraph = css`
  font-size: ${FONT_SIZE_STYLE.medium};
`;

const ParagraphDelete = css`
  text-align: center;
  font-size: ${FONT_SIZE_STYLE.medium};
`;

const Task = css`
  color: ${COLOR_STYLE.primary};
`;

const TaskInfo = css`
  display: block;
  color: ${COLOR_STYLE.greyDarkest};
  font-size: ${FONT_SIZE_STYLE.small};
  margin-top: 0.6rem;
`;

const Icon = css`
  transform: translateY(-25%);
  margin-right: 0.5rem;

  svg {
    color: ${COLOR_STYLE.yellow};
    font-size: ${FONT_SIZE_STYLE.largest};
  }
`;

const Btn = css`
  ${ButtonDefault}
  padding: 0.5rem 2rem;
  border-radius: 2px;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-25%, -50%);
  transition: all 0.2s;

  span {
    color: ${COLOR_STYLE.white};
    font-size: ${FONT_SIZE_STYLE.medium};
    font-weight: 600;
    transition: all 0.2s;
  }
`;

const BtnOk = css`
  ${Btn}
  background-color: ${COLOR_STYLE.primary};

  &:hover {
    background-color: ${COLOR_STYLE.primaryLighter};
  }
`;

const BtnDelete = css`
  ${Btn}
  background-color: ${COLOR_STYLE.red};
  padding: 0.5rem 1.2rem;

  span {
    font-size: ${FONT_SIZE_STYLE.small};
  }

  &:hover {
    transform: translate(-25%, -55%);
  }
`;
