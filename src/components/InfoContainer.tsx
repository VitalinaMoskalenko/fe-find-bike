import React, { CSSProperties, ReactNode } from 'react';

import styled from 'styled-components';

import { H3 } from './Headings';

const Container = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  padding: 16px;
  border-radius: 8px;
`;

type PropsType = {
  title: string;
  children: ReactNode;
  style?: CSSProperties;
};

export const InfoContainer: React.FC<PropsType> = ({ title, children, style }) => {
  return (
    <Container style={style}>
      <H3>{title}</H3>
      {children}
    </Container>
  );
};
