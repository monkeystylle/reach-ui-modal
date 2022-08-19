import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { X } from 'react-feather';
import Hamburger from 'hamburger-react';

interface ImenuModal {
  isOpen: boolean;
  onDismiss: () => void;
}

const NavbarMenuModal = ({ isOpen, onDismiss }: ImenuModal) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButtonWrapper onClick={onDismiss}>
          <X size={35} />
        </CloseButtonWrapper>
        <Nav>
          <NavLink href="/sale">Home</NavLink>
          <NavLink href="/new">About Us</NavLink>
          <NavLink href="/men">Portfolio</NavLink>
          <NavLink href="/women">Contact</NavLink>
        </Nav>
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
  background: hsl(220deg 5% 40% / 0.8);

  display: flex;
  justify-content: flex-end;
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
     transform: translateX(0%);
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: ${slideInRight} 400ms ease;
`;

const CloseButtonWrapper = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 10px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: 'hsl(220deg 3% 20%)';
  font-weight: 500;
  text-decoration: none;
  font-size: 2rem;
  text-transform: uppercase;
  &:first-of-type {
    color: #5c5c5c;
  }
`;

export default NavbarMenuModal;
