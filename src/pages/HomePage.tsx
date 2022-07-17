import React, { useState } from 'react';

import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  BrandStamp,
  Button,
  CommonErrorMessage,
  Input,
  ContentContainer,
  BikeItem,
  LoaderWrapper,
} from '../components';
import { useFormikErrorMessage, bikeSearchValidatorScheme } from '../lib';
import { searchBikesService } from '../services/bikes';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BikeSearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BikeListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin-top: 8px;
`;

const SearchButton = styled(Button).attrs(() => {
  return {
    style: {
      marginLeft: 8,
    },
  };
})``;

type FormFields = {
  city: string;
};

export const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { getErrorMessage } = useFormikErrorMessage();
  const { values, handleChange, errors, handleSubmit } = useFormik<FormFields>({
    initialValues: {
      city: '',
    },
    onSubmit: async (values, { validateForm }) => {
      await validateForm(values);
      refetch();
    },
    validationSchema: bikeSearchValidatorScheme,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { refetch, isFetching, data } = useQuery('bikes', () => searchBikesService(values.city), {
    onError: () => {
      setErrorMessage(t('Common.somethingWentWrong'));
    },
    enabled: false,
  });

  const navigateToBikeDetails = (bikeId: number) => {
    navigate(`/bike/${bikeId}`);
  };

  return (
    <Container>
      <ContentContainer>
        <BrandStamp />
        <BikeSearchContainer>
          <Input
            onChangeText={handleChange('city')}
            placeholder={t('HomePage.enterCity')}
            value={values.city}
            errorMessage={getErrorMessage(errors.city)}
          />
          <SearchButton text={t('HomePage.search')} onClick={handleSubmit} />
        </BikeSearchContainer>
        <BikeListContainer>
          {errorMessage ? (
            <CommonErrorMessage text={errorMessage} />
          ) : (
            <LoaderWrapper isLoading={isFetching}>
              {data?.bikes.map((item) => {
                return (
                  <BikeItem
                    key={item.id}
                    onClick={() => navigateToBikeDetails(item.id)}
                    title={item.title}
                    frameColor={item.frame_colors.join(', ')}
                    frameModel={item.frame_model}
                    isStolen={item.stolen}
                  />
                );
              })}
            </LoaderWrapper>
          )}
        </BikeListContainer>
      </ContentContainer>
    </Container>
  );
};
