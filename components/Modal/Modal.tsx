import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import styled from 'styled-components';
import { keyframes, css } from 'styled-components';
import { X } from 'react-feather';
import Hamburger from 'hamburger-react';

interface IModal {
  isOpen: boolean;
  onDismiss: () => void;
}

type ContentProps = {
  isOpen: boolean;
};

const Modal = ({ isOpen, onDismiss }: IModal) => {
  const ENTER_DURATION = '500ms';
  const EXIT_DURATION = '250ms';
  const ENTER_EASE = 'ease-out';
  const EXIT_EASE = 'ease-in';

  // const transitionDuration = isOpen ? ENTER_DURATION : EXIT_DURATION;
  // const ease = isOpen ? ENTER_EASE : EXIT_EASE;

  console.log('ISOPEN', isOpen);

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content isOpen={isOpen}>
        Content here here
        <CloseButtonWrapper onClick={onDismiss}>
          <X size={35} />
        </CloseButtonWrapper>
      </Content>
    </Overlay>
  );
};

//MODAL
const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% /0.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const slideInUp = keyframes`
  from {
    transform: translateY(400%);
  }
  to {
     transform: translateY(0%);
  }
`;

const slideOut = keyframes`
    from {
    transform: translateY(0%);
  }
  to {
     transform: translateY(440%);
  }
`;

const Content = styled(DialogContent)<ContentProps>`
  position: relative;
  background: white;
  border-radius: 8px;
  width: 65%;

  padding: 32px;
  /* animation: ${slideInUp} 450ms ease-out; */
  animation: ${({ isOpen }) =>
    isOpen &&
    css`
      ${slideInUp} 450ms ease-out
    `};
`;

const CloseButtonWrapper = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default Modal;
