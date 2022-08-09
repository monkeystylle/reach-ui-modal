import styled from 'styled-components';
import React from 'react';
import type { NextPage } from 'next';

import Modal from '../components/Modal';

const Home: NextPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => setShowModal(true);
  const handleDismiss = () => setShowModal(false);

  return (
    <>
      <PageWrapper>
        <Button onClick={handleOpen}>Modal Toggle Button</Button>
      </PageWrapper>
      {/* MODAL */}
      <Modal isOpen={showModal} onDismiss={handleDismiss} />
    </>
  );
};

const PageWrapper = styled.div`
  flex: 1;
  display: grid;
  place-content: center;
`;

const Div1 = styled.div`
  background: pink;
  flex: 1;
`;
const Div2 = styled.div`
  background: aqua;
  flex: 1;
`;

const Button = styled.button`
  background-color: papayawhip;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 1.125rem;
`;

export default Home;
