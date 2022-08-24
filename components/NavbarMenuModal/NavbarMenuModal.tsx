import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { X } from 'react-feather';

interface ImenuModal {
  isOpen: boolean;
  onDismiss: () => void;
}

const NavbarMenuModal = ({ isOpen, onDismiss }: ImenuModal) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content>
        <InnerWrapper>
          <CloseButtonWrapper onClick={onDismiss}>
            <X size={35} />
          </CloseButtonWrapper>
          <Nav>
            <NavLink href="/sale">Home</NavLink>
            <NavLink href="/new">About Us</NavLink>
            <NavLink href="/men">Portfolio</NavLink>
            <NavLink href="/women">Contact</NavLink>
          </Nav>
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

//MODAL

const fadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity: 1;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  animation: ${fadeIn} 500ms ease;
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
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
  position: relative;
  background: white;
  width: 300px;
  height: 100%;

  animation: ${slideInRight} 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
  animation-delay: 200ms;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px;

  justify-content: center;

  animation: ${fadeIn} 600ms both ease-out;
  animation-delay: 450ms;
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
