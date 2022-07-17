import React, { Fragment, ReactNode } from 'react';

import { Loader } from './Loader';

type PropsType = {
  isLoading: boolean;
  children: ReactNode;
};

export const LoaderWrapper: React.FC<PropsType> = ({ children, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

  return <Fragment>{children}</Fragment>;
};
