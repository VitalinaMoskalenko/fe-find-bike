import React, { Fragment, ReactNode } from 'react';

import styled from 'styled-components';

import { Loader } from './Loader';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type PropsType = {
  isLoading: boolean;
  children: ReactNode;
};

export const LoaderWrapper: React.FC<PropsType> = ({ children, isLoading }) => {
  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return <Fragment>{children}</Fragment>;
};
