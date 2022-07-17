import * as yup from 'yup';

const baseTranslationPath = 'Errors.';

export const bikeSearchValidatorScheme = yup.object().shape({
  city: yup.string().required(`${baseTranslationPath}cityEmpty`),
});
