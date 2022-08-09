import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import { Divide as Hamburger } from 'hamburger-react';
import NavbarMenuModal from '../NavbarMenuModal';
import { Menu } from 'react-feather';

type Props = {};

const Navbar = (props: Props) => {
  //button modal
  const [isOpen, setOpen] = useState(false);

  //modal
  const [showMenuModal, setShowMenuModal] = useState(false);
  const handleOpen = () => setShowMenuModal(true);
  const handleDismiss = () => setShowMenuModal(false);

  return (
    <NavbarWrapper>
      <Nav>
        <h2>TITLE</h2>
        <MenuModalButtonWrapper onClick={handleOpen}>
          <Menu size={40} strokeWidth={1} />
        </MenuModalButtonWrapper>
      </Nav>
      {/* DIALOG */}
      <NavbarMenuModal isOpen={showMenuModal} onDismiss={handleDismiss} />
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

const MenuModalButtonWrapper = styled.button`
  background-color: papayawhip;

  font-size: 1.125rem;
  padding: 7px;
`;

export default Navbar;
