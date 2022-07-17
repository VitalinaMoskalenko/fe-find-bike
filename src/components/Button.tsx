import React, { CSSProperties } from 'react';

import styled from 'styled-components';

import { BodyText } from './Paragraphs';

const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  min-width: 100px;
  height: 52px;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary08};
    cursor: pointer;
  }
`;

const ButtonText = styled(BodyText)`
  color: ${({ theme }) => theme.colors.white};
`;

type PropsType = {
  text: string;
  onClick: () => void;
  style?: CSSProperties;
};

export const Button: React.FC<PropsType> = ({ text, onClick, style }) => {
  return (
    <ButtonContainer onClick={onClick} style={style} type="submit">
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
