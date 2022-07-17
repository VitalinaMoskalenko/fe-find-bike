import { useTranslation } from 'react-i18next';

export const useFormikErrorMessage = () => {
  const { t } = useTranslation();

  const getErrorMessage = (error?: string) => {
    return error && t(error);
  };

  return { getErrorMessage };
};
