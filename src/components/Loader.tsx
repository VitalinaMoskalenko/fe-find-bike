import React from 'react';

import { PuffLoader } from 'react-spinners';
import styled from 'styled-components';

const WrappedLoader = styled(PuffLoader).attrs(({ theme }) => {
  return {
    color: theme.colors.primary,
  };
})``;

export const Loader = () => {
  return <WrappedLoader size={50} />;
};
