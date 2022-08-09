import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import styled from 'styled-components';
import { X } from 'react-feather';
import Hamburger from 'hamburger-react';

interface IModal {
  isOpen: boolean;
  onDismiss: () => void;
}

const Modal = ({ isOpen, onDismiss }: IModal) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        Content here
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
  background: hsl(0deg 0% 0% /0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  border-radius: 8px;
  width: 65%;

  padding: 32px;
`;

const CloseButtonWrapper = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default Modal;
