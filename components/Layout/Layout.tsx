import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Content = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: auto;
`;

export default Layout;
