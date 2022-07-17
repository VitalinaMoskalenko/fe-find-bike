import React from 'react';

import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { BodyText, H4, KeyData } from '../../../components';

const Stolen = styled(BodyText)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.error};
`;

const Container = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  margin-bottom: 8px;
  border-radius: 8px;
  padding: 8px;

  :hover {
    border: ${({ theme }) => `1px solid ${theme.colors.primary08}`};
    background-color: ${({ theme }) => theme.colors.primary02};
    cursor: pointer;
  }
`;

type PropsType = {
  title: string;
  frameColor: string;
  frameModel: string;
  isStolen: boolean;
};
export const BikeItem: React.FC<PropsType> = ({ title, isStolen, frameColor, frameModel }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <H4>{title}</H4>
      {isStolen && <Stolen>{t('HomePage.stolen')}</Stolen>}
      <KeyData dataKey={t('HomePage.frameModel')} value={frameModel} />
      <KeyData dataKey={t('HomePage.frameColors')} value={frameColor} />
    </Container>
  );
};
