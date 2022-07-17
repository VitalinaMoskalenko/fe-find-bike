import React from 'react';

import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { bicycleImage } from '../assets';
import { ContentContainer, H2, InfoContainer, KeyData, LoaderWrapper } from '../components';
import { getBikeDetailsService } from '../services/bikes';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RobberyDetails = styled(InfoContainer).attrs(() => {
  return {
    style: {
      marginTop: 8,
    },
  };
})``;

const BikeImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 16px 0px;
`;

const BikeName = styled(H2)`
  color: ${({ theme }) => theme.colors.primary};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BikeDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const { data, isFetching } = useQuery('bikeDetails', () => getBikeDetailsService(id || ''));

  return (
    <Container>
      <LoaderWrapper isLoading={isFetching}>
        {data && (
          <ContentContainer>
            <Header>
              <BikeName>{data.bike.title}</BikeName>
              <BikeImage src={data.bike.large_img || bicycleImage} />
            </Header>
            <InfoContainer title={t('BikeDetails.basicDetails')}>
              <>
                {data.bike.description && (
                  <KeyData dataKey={t('HomePage.description')} value={data.bike.description} />
                )}
                <KeyData dataKey={t('Common.manufacturerName')} value={data.bike.manufacturer_name} />
                <KeyData dataKey={t('Common.frameModel')} value={data.bike.frame_model} />
                <KeyData dataKey={t('Common.frameColors')} value={data.bike.frame_colors.join(', ')} />
                {data.bike.year && <KeyData dataKey={t('Common.year')} value={data.bike.year.toString()} />}
                <KeyData dataKey={t('Common.serialNumber')} value={data.bike.serial} />
              </>
            </InfoContainer>
            {data.bike.stolen && (
              <RobberyDetails title={t('BikeDetails.robberyDetails')}>
                <>
                  <KeyData
                    dataKey={t('Common.bikeStolen')}
                    value={format(data.bike.date_stolen, 'dd.MM.yyyy')}
                  />
                  <KeyData dataKey={t('Common.stolenLocation')} value={data.bike.stolen_location} />
                </>
              </RobberyDetails>
            )}
          </ContentContainer>
        )}
      </LoaderWrapper>
    </Container>
  );
};
