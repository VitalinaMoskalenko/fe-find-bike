import React, { CSSProperties } from 'react';

import styled from 'styled-components';

import { BodyText } from './Paragraphs';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Key = styled(BodyText)`
  font-weight: bold;
`;

const Value = styled(BodyText)`
  margin-left: 4px;
  font-weight: normal;
`;

type PropsType = {
  dataKey: string;
  value: string;
  valueStyles?: CSSProperties;
};

export const KeyData: React.FC<PropsType> = ({ dataKey, value, valueStyles }) => {
  return (
    <Container>
      <Key>{`${dataKey}:`}</Key>
      <Value style={valueStyles}>{value}</Value>
    </Container>
  );
};
