import 'jest-styled-components';
import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { Input } from '../Input';
import { TestWrapper } from '../TestWrapper';

describe('Input Tests', () => {
  it('should display proper value', () => {
    const { getByDisplayValue } = render(
      <TestWrapper>
        <Input onChangeText={() => null} value="New" />
      </TestWrapper>,
    );
    const inputValue = getByDisplayValue('New');

    expect(inputValue).toBeInTheDocument();
  });

  it('should display error message and change border color', () => {
    const { getByText, getByTestId } = render(
      <TestWrapper>
        <Input onChangeText={() => null} value="New" errorMessage="error message" />
      </TestWrapper>,
    );
    const inputErrorMessage = getByText('error message');
    const inputElement = getByTestId('inputField');

    expect(inputErrorMessage).toBeInTheDocument();
    expect(inputElement).toHaveStyle({ border: '1px solid red' });
  });
});
