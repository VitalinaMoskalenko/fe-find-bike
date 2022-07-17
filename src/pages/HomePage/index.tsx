import React, { useState } from 'react';

import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import { BrandStamp, Button, CommonErrorMessage, Input, ContentContainer, Loader } from '../../components';
import { useFormikErrorMessage, bikeSearchValidatorScheme } from '../../lib';
import { searchBikesService } from '../../services/bikes';
import { BikeList } from './components/BikeList';

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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  width: 100%;
`;

const SearchButton = styled(Button).attrs(() => {
  return {
    style: {
      marginLeft: 8,
    },
  };
})``;

const baseTranslationPath = 'HomePage.';

type FormFields = {
  city: string;
};

export const HomePage = () => {
  const { t } = useTranslation();
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

  return (
    <Container>
      <ContentContainer>
        <BrandStamp />
        <BikeSearchContainer>
          <Input
            onChangeText={handleChange('city')}
            placeholder={t(`${baseTranslationPath}enterCity`)}
            value={values.city}
            errorMessage={getErrorMessage(errors.city)}
          />
          <SearchButton text={t(`${baseTranslationPath}search`)} onClick={handleSubmit} />
        </BikeSearchContainer>
        <BikeListContainer>
          {errorMessage ? (
            <CommonErrorMessage text={errorMessage} />
          ) : (
            <BikeListContainer>
              {isFetching ? <Loader /> : <BikeList bikes={data?.bikes} />}
            </BikeListContainer>
          )}
        </BikeListContainer>
      </ContentContainer>
    </Container>
  );
};
