import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';

type Props = {};

const Navbar = (props: Props) => {
  const [showDialog, setShowDialog] = React.useState(false);
  const handleOpen = () => setShowDialog(true);
  const handleDismiss = () => setShowDialog(false);

  return (
    <NavbarWrapper>
      <Nav>
        <h2>TITLE</h2>
        <Button onClick={handleOpen}>Show Dialog</Button>
      </Nav>
      {/* DIALOG */}
      <Overlay isOpen={showDialog} onDismiss={handleDismiss}>
        <Content>
          <p>content here</p>
          <Button onClick={handleDismiss}>Very nice.</Button>
        </Content>
      </Overlay>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  margin: auto;
  padding: 12px 0;
  width: 100%;
  color: lightgrey;
  background: gainsboro;
  /* border-bottom: 1px solid #ddd; */
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;
  height: 100%;
  align-items: center;
  font-size: 1.5rem;
  justify-content: space-between;
  color: #60636c;

  max-width: 1200px;
  margin: auto;
`;

const LogoWrapper = styled.div`
  font-size: 2rem;
  height: 100%;
`;

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

const Button = styled.button`
  background-color: white;
  padding: 8px 16px;
  font-size: 1.125rem;
`;

export default Navbar;
