import React from 'react';

import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { bicycleImage } from '../assets';
import { H1 } from './Headings';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const BicycleImage = styled.img`
  width: 200px;
  height: 100px;
`;

const BrandText = styled(H1)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const BrandStamp = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <BrandText>{t('Common.findBike')}</BrandText>
      <BicycleImage src={bicycleImage} />
    </Container>
  );
};
