import React from 'react';

import styled from 'styled-components';

import { H3 } from './Headings';

const ErrorMessage = styled(H3)`
  color: ${({ theme }) => theme.colors.error};
`;

type PropsType = {
  text: string;
};

export const CommonErrorMessage: React.FC<PropsType> = ({ text }) => {
  return <ErrorMessage>{text}</ErrorMessage>;
};
