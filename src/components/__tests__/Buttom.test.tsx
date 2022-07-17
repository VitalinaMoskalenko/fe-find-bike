import 'jest-styled-components';
import React from 'react';
import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import { Button } from '../Button';
import { TestWrapper } from '../TestWrapper';

describe('Button Tests', () => {
  it('should display proper text', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <TestWrapper>
        <Button text="Click me" onClick={onClickMock} />
      </TestWrapper>,
    );
    const textElement = getByText('Click me');

    expect(textElement).toBeInTheDocument();
  });

  it('should contain passed styles', () => {
    const newStyles = { opacity: 0.5 };
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <TestWrapper>
        <Button text="button" onClick={onClickMock} style={newStyles} />
      </TestWrapper>,
    );
    const buttonElement = getByTestId('button');

    expect(buttonElement).toHaveStyle(newStyles);
  });

  it('should call on click method', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <TestWrapper>
        <Button text="button" onClick={onClickMock} />
      </TestWrapper>,
    );
    const buttonElement = getByTestId('button');
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
