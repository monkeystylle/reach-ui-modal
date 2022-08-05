import styled from 'styled-components';
import React from 'react';
import type { NextPage } from 'next';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';

const Home: NextPage = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const handleOpen = () => setShowDialog(true);
  const handleDismiss = () => setShowDialog(false);

  return (
    <>
      <Wrapper>
        <Button onClick={handleOpen}>Show Dialog</Button>
        <Overlay isOpen={showDialog} onDismiss={handleDismiss}>
          <Content>
            <p>content here</p>
            <Button onClick={handleDismiss}>Very nice.</Button>
          </Content>
        </Overlay>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 256px;
`;

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
  background-color: lightgray;
  padding: 8px 16px;
  font-size: 1.125rem;
`;

export default Home;
