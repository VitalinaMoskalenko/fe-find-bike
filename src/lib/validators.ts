import * as yup from 'yup';

export const bikeSearchValidatorScheme = yup.object().shape({
  city: yup.string().required('Errors.cityEmpty'),
});
