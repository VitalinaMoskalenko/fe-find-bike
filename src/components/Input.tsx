import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { ThemeType } from '../types/shared/styled';
import { CaptionBodyText } from './Paragraphs';

enum InputStatus {
  error = 'error',
  focused = 'focused',
  disabled = 'disabled',
}

const getBorderColor = (inputStatus: InputStatus | null, theme: ThemeType) => {
  switch (inputStatus) {
    case InputStatus.error:
      return theme.colors.error;
    default:
      return theme.colors.black;
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

type InputFieldType = {
  inputStatus: InputStatus | null;
};

const InputField = styled.input<InputFieldType>`
  height: 50px;
  border-radius: 8px;
  border: ${({ inputStatus, theme }) => `1px solid ${getBorderColor(inputStatus, theme)}`};
  font-size: ${({ theme }) => theme.fonts.size.h5}px;
  padding: 0px 8px;
`;

const ErrorMessage = styled(CaptionBodyText)`
  color: ${({ theme }) => theme.colors.error};
  margin-top: 4px;
`;

type PropsType = {
  onChangeText: (text: string) => void;
  placeholder?: string;
  value?: string;
  errorMessage?: string;
};

export const Input: React.FC<PropsType> = ({ onChangeText, placeholder, value, errorMessage }) => {
  const [inputStatus, setInputStatus] = useState<InputStatus | null>(null);

  useEffect(() => {
    setInputStatus(errorMessage ? InputStatus.error : null);
  }, [errorMessage]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeText(event.target.value);
  };

  const onBlur = () => {
    !errorMessage && setInputStatus(null);
  };

  return (
    <Container>
      <InputField
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        inputStatus={inputStatus}
        onBlur={onBlur}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};
